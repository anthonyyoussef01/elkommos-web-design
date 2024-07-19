export const Offerings = () => (
    <div className="flex gap-4 p-4 w-full h-full drop-shadow-[0_3px_3px_rgba(240,240,240,0.9)] dark:drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]">
        <a
            href="/"
            className={
                'text-white font-bold text-xl md:text-2xl lg:text-3xl flex items-end justify-start p-4 w-32 md:w-40 lg:w-56 h-[200px] rounded-md bg-gradient-to-br [background-size:150%] from-orange-400 via-fuchsia-600 to-cyan-400'
            }
        >
            We <br /> Create
        </a>
        <div className={'flex flex-col gap-3 '}>
            <div>
                <h3 className={'dark:text-white text-neutral-950'}>Websites</h3>
                <p className={'text-neutral-500 dark:text-neutral-400 text-xs md:text-sm'}>
                    Interactive, beautiful and user friendly websites
                </p>
            </div>
            <div>
                <h3 className={'dark:text-white text-neutral-950'}>Components</h3>
                <p className={'text-neutral-500 dark:text-neutral-400 text-xs md:text-sm'}>Animated and colorful components</p>
            </div>
            <div>
                <h3 className={'dark:text-white text-neutral-950'}>SaaS</h3>
                <p className={'text-neutral-500 dark:text-neutral-400 text-xs md:text-sm'}>
                    Useful Software as a Service products which people love
                </p>
            </div>
        </div>
    </div>
)
