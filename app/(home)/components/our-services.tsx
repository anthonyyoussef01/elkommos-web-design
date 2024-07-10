export const OurServices = () => (
    <div className="flex gap-4 p-4 w-full h-full">
        <a
            href="/"
            className={
                'text-white font-bold text-3xl flex items-end justify-start p-4 w-56 h-[200px] rounded-md bg-gradient-to-br [background-size:150%] from-orange-400 via-fuchsia-600 to-cyan-400'
            }
        >
            We <br /> Create
        </a>
        <div className={'flex flex-col gap-3'}>
            <div>
                <h3 className={'dark:text-white text-neutral-950'}>Websites</h3>
                <p className={'text-neutral-500 text-sm'}>
                    Interactive, beautiful and user friendly websites
                </p>
            </div>
            <div>
                <h3 className={'dark:text-white text-neutral-950'}>Components</h3>
                <p className={'text-neutral-500 text-sm'}>Animated and colorful components</p>
            </div>
            <div>
                <h3 className={'dark:text-white text-neutral-950'}>SaaS</h3>
                <p className={'text-neutral-500 text-sm'}>
                    Useful Software as a Service products which people love
                </p>
            </div>
        </div>
    </div>
)
