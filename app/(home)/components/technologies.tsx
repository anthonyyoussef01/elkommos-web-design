import {Pointer} from "@/components/ui/follow-pointer";

export const Technologies = () => (
    <div
        className="grid grid-cols-2 gap-4 p-4 drop-shadow-[0_3px_3px_rgba(240,240,240,0.9)] dark:drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]"
    >
        <span
            className={'hover:dark:bg-neutral-900 hover:bg-neutral-100 p-3 rounded-md transition-colors'}
        >
            <h3 className={'dark:text-white text-neutral-950'}>
                Tech Stack
            </h3>
            <p className={'text-neutral-500 dark:text-neutral-400 text-sm'}>
                The technologies that our team has expertise and love working with
            </p>
        </span>
        <a
            href={'/advanced-technologies'}
            className={'hover:dark:bg-neutral-900 hover:bg-neutral-100 p-3 rounded-md transition-colors'}
        >
            <h3 className={'dark:text-white text-neutral-950'}>
                Advanced Technologies
            </h3>
            <p className={'text-neutral-500 dark:text-neutral-400 text-sm'}>
                Advanced services and emerging technologies that our team offers and is excited about
            </p>
        </a>
        <span
            className={'hover:dark:bg-neutral-900 hover:bg-neutral-100 p-3 rounded-md transition-colors'}
        >
            <h3 className={'dark:text-white text-neutral-950'}>
                Blog
            </h3>
            <p className={'text-neutral-500 dark:text-neutral-400 text-sm'}>
                The latest articles and insights from our team
            </p>
        </span>
        <span
            className={'hover:dark:bg-neutral-900 hover:bg-neutral-100 p-3 rounded-md transition-colors'}
        >
            <h3 className={'dark:text-white text-neutral-950'}>
                Case Studies
            </h3>
            <p className={'text-neutral-500 dark:text-neutral-400 text-sm'}>
                Real-world examples of how we've helped businesses grow
            </p>
        </span>
    </div>
)
