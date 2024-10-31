import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 150,
                color: '#00CC22',
                '& .MuiSlider-rail': {
                    color: '#8b8b8b',
                },
                '& .MuiSlider-thumb': { // Стилизация ползунка (thumb)
                    height: 18, // Высота ползунка
                    width: 18, // Ширина ползунка
                    backgroundColor: '#fff', // Цвет фона ползунка
                    border: '1px solid currentColor', // Граница ползунка, совпадающая с текущим цветом
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': { // Стилизация ползунка при наведении
                        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)', // Тень вокруг ползунка при наведении
                    },
                    '&::before': {
                        height: 8,
                        width: 8,
                        backgroundColor: 'currentColor',
                        borderRadius: '50%',
                    },
                },

        }
        }
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
