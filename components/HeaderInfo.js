const HeaderInfo = ({Icon , title}) => {
    return (

        <div className='flex item-center space-x-2'>

        {Icon}
        <span className='capitalize text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-400' >{title}</span>
        </div>

    )
}

export default HeaderInfo;