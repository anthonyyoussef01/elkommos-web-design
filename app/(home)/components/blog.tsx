export const Blog = () => (
    <>
        <div className={'p-4 border-b dark:border-neutral-800'}>
            <div className={'text-sm dark:text-neutral-500 text-neutral-400 px-3'}>info</div>
            <span
                className={
                    'block hover:dark:bg-neutral-900 hover:bg-neutral-100 p-3 rounded-md transition-colors w-fit'
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
        <p className={'text-neutral-500 text-sm'}>Check out how we deliver our products</p>
      </span>
        </div>
        <div className={'p-4'}>
            <div className={'text-sm dark:text-neutral-500 text-neutral-400 px-3 pt-0'}>tutorials</div>
            <div className={'flex'}>
        <span
            className={
                'hover:dark:bg-neutral-900 hover:bg-neutral-100 p-3 rounded-md transition-colors'
            }
        >
          <h3 className={'dark:text-white text-neutral-950 flex items-center gap-1'}>
            Animations{' '}
              <svg
                  viewBox="0 0 12 12"
                  width="10px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stransition-all duration-100 dark:fill-neutral-500 fill-neutral-900"
              >
              <path d="M11 9.283V1H2.727v1.44h5.83L1 9.99 2.01 11l7.556-7.55v5.833H11Z" />
            </svg>
          </h3>
          <p className={'text-neutral-500 text-sm'}>
            You will learn how to make fascinating animations
          </p>
        </span>
                <span
                    className={
                        'hover:dark:bg-neutral-900 hover:bg-neutral-100 p-3 rounded-md transition-colors'
                    }
                >
          <h3 className={'dark:text-white text-neutral-950 flex items-center gap-1'}>
            API{' '}
              <svg
                  viewBox="0 0 12 12"
                  width="10px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stransition-all duration-100 dark:fill-neutral-500 fill-neutral-900"
              >
              <path d="M11 9.283V1H2.727v1.44h5.83L1 9.99 2.01 11l7.556-7.55v5.833H11Z" />
            </svg>
          </h3>
          <p className={'text-neutral-500 text-sm'}>
            Learn how to build fast and reliable APIs to deliver data
          </p>
        </span>
            </div>
        </div>
    </>
)