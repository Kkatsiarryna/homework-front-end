import React from 'react'

// import noneUpIcon from './assets/noneUpIcon.svg'
// import noneDownIcon from './assets/noneDownIcon.svg'
// import downIcon from './assets/downIcon.svg'
// import upIcon from './assets/upIcon.svg'



// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'


export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
   // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    //console.log(`sort: ${sort}, down: ${down}, up: ${up}`)


    // if(sort === '' || (sort !== down && sort !== up)){
    //     return down
    // }
    // if(sort === down) return up
    // return ''

    switch (sort) {
        case down : {
            return up
        }
        case up : {
            return ''
        }
        default : {
            return down
        }
    }

}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
        console.log(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    //const image = noneUpIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            {/*{ sort === '' &&*/}
            {/*    <div>*/}
            {/*        <img*/}
            {/*            id={id + '-icon-' + sort}*/}
            {/*            src={noneUpIcon}*/}
            {/*        />*/}
            {/*        <img*/}
            {/*            id={id + '-icon-' + sort}*/}
            {/*            src={noneDownIcon}*/}
            {/*            alt={'noneIcon'}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*}*/}
            {/*{*/}
            {/*    sort === down &&*/}
            {/*        <img*/}
            {/*        id={id + '-icon-' + sort}*/}
            {/*        src={downIcon}*/}
            {/*        alt={'downIcon'}*/}
            {/*    />*/}
            {/*}*/}
            {/*{*/}
            {/*    sort === up &&*/}
            {/*    <img*/}
            {/*        id={id + '-icon-' + sort}*/}
            {/*        src={upIcon}*/}
            {/*        alt={'upIcon'}*/}
            {/*    />*/}
            {/*}*/}


            {icon} {/*а это убрать*/}
        </span>
    )
}

export default SuperSort
