import {Pointer} from "@/components/ui/follow-pointer";

export const Technologies = () => (
    <div
        className="grid grid-cols-2 gap-4 p-4 drop-shadow-[0_3px_3px_rgba(240,240,240,0.9)] dark:drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]"
    >
        <a
            href={'/tech-stack'}
            className={'hover:dark:bg-neutral-900 hover:bg-neutral-100 p-3 rounded-md transition-colors'}
        >
            <h3 className={'dark:text-white text-neutral-950 flex items-center gap-1'}>
                Tech Stack{' '}
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
                Technologies that our team has expertise & loves working with
            </p>
        </a>
        <a
            href={'/advanced-technologies'}
            className={'hover:dark:bg-neutral-900 hover:bg-neutral-100 p-3 rounded-md transition-colors'}
        >
            <h3 className={'dark:text-white text-neutral-950 flex items-center gap-1'}>
                Advanced Technologies{' '}
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
                Services & emerging technologies that our team offers and is excited about
            </p>
        </a>
        <span
            className={'hover:dark:bg-neutral-900 hover:bg-neutral-100 p-3 rounded-md transition-colors'}
        >
            <h3 className={'dark:text-white text-neutral-950 flex items-center gap-1'}>
                Blog{' '}
                <svg id='Coming_Soon_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'
                     xmlnsXlink='http://www.w3.org/1999/xlink'>
                    <rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>

                    <g transform="matrix(0.43 0 0 0.43 12 12)">
                        <path
                            style={{
                                stroke: "none",
                                strokeWidth: 1,
                                strokeDasharray: "none",
                                strokeLinecap: "butt",
                                strokeDashoffset: 0,
                                strokeLinejoin: "miter",
                                strokeMiterlimit: 4,
                                fill: "rgb(0,0,0)",
                                fillRule: "nonzero",
                                opacity: 1
                            }}
                            transform=" translate(-25.14, -25.01)"
                            d="M 23 2 L 23 6.0859375 C 12.343754 7.0955258 3.9882813 16.0824 3.9882812 27 C 3.9882812 38.592349 13.407643 48.011719 25 48.011719 C 36.592357 48.011719 46.011719 38.592349 46.011719 27 C 46.011719 16.0824 37.656246 7.0955258 27 6.0859375 L 27 2 L 23 2 z M 42.042969 3 L 39.214844 5.828125 L 40.505859 7.1191406 L 39 8.6269531 L 40.658203 10.285156 L 42.164062 8.7773438 L 43.457031 10.070312 L 46.285156 7.2421875 L 42.042969 3 z M 25 8.0117188 C 35.499048 8.0117188 43.988281 16.500959 43.988281 27 C 43.988281 37.499041 35.499048 45.988281 25 45.988281 C 14.500952 45.988281 6.0117186 37.499041 6.0117188 27 C 6.0117188 22.115219 7.8659637 17.680466 10.888672 14.318359 L 22.289062 25.720703 C 21.85113907355311 26.649594521265143 21.918781760163192 27.73794323011371 22.46835447225985 28.605460251217508 C 23.017927184356505 29.47297727232131 23.973055433090558 29.999103182702456 25 30 C 25.442532849979635 29.999180668455754 25.879404033329774 29.90046797077761 26.279297 29.710938 L 27.820312 31.251953 C 28.076025854657416 31.507811874777797 28.448831987520464 31.607780494423263 28.79825151898729 31.5141892005129 C 29.147671050454118 31.420597906602538 29.420597906602538 31.147671050454118 29.5141892005129 30.79825151898729 C 29.607780494423263 30.448831987520464 29.507811874777797 30.076025854657416 29.251953 29.820312 L 27.710938 28.279297 C 28.148860926446893 27.350405478734857 28.081218239836808 26.26205676988629 27.53164552774015 25.394539748782492 C 26.982072815643495 24.52702272767869 26.02694456690944 24.000896817297544 25 24 L 25 23 L 22.431641 23 L 20.429688 21 L 25 21 L 25 19 L 18.429688 19 L 16.429688 17 L 25 17 L 25 15 L 14.429688 15 L 12.429688 13 L 25 13 L 25 11 L 14.792969 11 C 16.09048 10.171319 17.492793 9.496375 18.980469 9 L 25 9 L 25 8.0117188 z"
                            strokeLinecap="round"/>
                    </g>
                </svg>
            </h3>
            <p className={'text-neutral-500 dark:text-neutral-400 text-sm'}>
                The latest articles and insights from our team
            </p>
        </span>
        <span
            className={'hover:dark:bg-neutral-900 hover:bg-neutral-100 p-3 rounded-md transition-colors'}
        >
            <h3 className={'dark:text-white text-neutral-950 flex items-center gap-1'}>
                Case Studies{' '}
                <svg id='Coming_Soon_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'
                     xmlnsXlink='http://www.w3.org/1999/xlink'>
                    <rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>

                    <g transform="matrix(0.43 0 0 0.43 12 12)">
                        <path
                            style={{
                                stroke: "none",
                                strokeWidth: 1,
                                strokeDasharray: "none",
                                strokeLinecap: "butt",
                                strokeDashoffset: 0,
                                strokeLinejoin: "miter",
                                strokeMiterlimit: 4,
                                fill: "rgb(0,0,0)",
                                fillRule: "nonzero",
                                opacity: 1
                            }}
                            transform=" translate(-25.14, -25.01)"
                            d="M 23 2 L 23 6.0859375 C 12.343754 7.0955258 3.9882813 16.0824 3.9882812 27 C 3.9882812 38.592349 13.407643 48.011719 25 48.011719 C 36.592357 48.011719 46.011719 38.592349 46.011719 27 C 46.011719 16.0824 37.656246 7.0955258 27 6.0859375 L 27 2 L 23 2 z M 42.042969 3 L 39.214844 5.828125 L 40.505859 7.1191406 L 39 8.6269531 L 40.658203 10.285156 L 42.164062 8.7773438 L 43.457031 10.070312 L 46.285156 7.2421875 L 42.042969 3 z M 25 8.0117188 C 35.499048 8.0117188 43.988281 16.500959 43.988281 27 C 43.988281 37.499041 35.499048 45.988281 25 45.988281 C 14.500952 45.988281 6.0117186 37.499041 6.0117188 27 C 6.0117188 22.115219 7.8659637 17.680466 10.888672 14.318359 L 22.289062 25.720703 C 21.85113907355311 26.649594521265143 21.918781760163192 27.73794323011371 22.46835447225985 28.605460251217508 C 23.017927184356505 29.47297727232131 23.973055433090558 29.999103182702456 25 30 C 25.442532849979635 29.999180668455754 25.879404033329774 29.90046797077761 26.279297 29.710938 L 27.820312 31.251953 C 28.076025854657416 31.507811874777797 28.448831987520464 31.607780494423263 28.79825151898729 31.5141892005129 C 29.147671050454118 31.420597906602538 29.420597906602538 31.147671050454118 29.5141892005129 30.79825151898729 C 29.607780494423263 30.448831987520464 29.507811874777797 30.076025854657416 29.251953 29.820312 L 27.710938 28.279297 C 28.148860926446893 27.350405478734857 28.081218239836808 26.26205676988629 27.53164552774015 25.394539748782492 C 26.982072815643495 24.52702272767869 26.02694456690944 24.000896817297544 25 24 L 25 23 L 22.431641 23 L 20.429688 21 L 25 21 L 25 19 L 18.429688 19 L 16.429688 17 L 25 17 L 25 15 L 14.429688 15 L 12.429688 13 L 25 13 L 25 11 L 14.792969 11 C 16.09048 10.171319 17.492793 9.496375 18.980469 9 L 25 9 L 25 8.0117188 z"
                            strokeLinecap="round"/>
                    </g>
                </svg>
            </h3>
            <p className={'text-neutral-500 dark:text-neutral-400 text-sm'}>
                Real-world examples of how we have helped businesses grow
            </p>
        </span>
    </div>
)
