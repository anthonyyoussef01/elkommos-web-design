export const Services = () => (
    <>
        <div className={'p-4 border-b dark:border-neutral-800 drop-shadow-[0_3px_3px_rgba(240,240,240,0.9)] dark:drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'}>
            <div className={'text-neutral-500 dark:text-neutral-400 text-sm px-3'}>
                services
            </div>
            <a
                href={'/pricing'}
                className={
                    'block hover:dark:bg-neutral-900 hover:bg-neutral-100 p-3 rounded-md transition-colors w-fit'
                }
            >
                <h3 className={'dark:text-white text-neutral-950 flex items-center gap-1'}>
                    Pricing{' '}
                    <svg
                        viewBox="0 0 12 12"
                        width="10px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stransition-all duration-100 dark:fill-neutral-500 fill-neutral-900"
                    >
                        <path d="M11 9.283V1H2.727v1.44h5.83L1 9.99 2.01 11l7.556-7.55v5.833H11Z" />
                    </svg>
                </h3>
                <p className={'text-neutral-500 dark:text-neutral-400 text-sm'}>
                    Explore our competitive pricing plans
                </p>
            </a>
        </div>
        <div className={'p-4 drop-shadow-[0_3px_3px_rgba(240,240,240,0.9)] dark:drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'}>
            <div className={'text-neutral-500 dark:text-neutral-400 text-sm px-3 pt-0'}>info</div>
            <div className={'flex'}>
                <a
                    href={'/workflow'}
                    className={
                        'hover:dark:bg-neutral-900 hover:bg-neutral-100 p-3 rounded-md transition-colors'
                    }
                >
                    <h3 className={'dark:text-white text-neutral-950 flex items-center gap-1'}>
                        Workflow{' '}
                        <svg
                            viewBox="0 0 12 12"
                            width="10px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="stransition-all duration-100 dark:fill-neutral-500 fill-neutral-900"
                        >
                            <path d="M11 9.283V1H2.727v1.44h5.83L1 9.99 2.01 11l7.556-7.55v5.833H11Z" />
                        </svg>
                    </h3>
                    <p className={'text-neutral-500 dark:text-neutral-400 text-sm'}>
                        Check out how we deliver our products
                    </p>
                </a>
                <a
                    href={'/testimonials'}
                    className={
                        'hover:dark:bg-neutral-900 hover:bg-neutral-100 p-3 rounded-md transition-colors'
                    }
                >
                    <h3 className={'dark:text-white text-neutral-950 flex items-center gap-1'}>
                        Customer Testimonials{' '}
                        <svg
                            viewBox="0 0 12 12"
                            width="10px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="stransition-all duration-100 dark:fill-neutral-500 fill-neutral-900"
                        >
                            <path d="M11 9.283V1H2.727v1.44h5.83L1 9.99 2.01 11l7.556-7.55v5.833H11Z" />
                        </svg>
                    </h3>
                    <p className={'text-neutral-500 dark:text-neutral-400 text-sm'}>
                        Discover how we have helped businesses like yours achieve their goals
                    </p>
                </a>
            </div>
        </div>
    </>
)
