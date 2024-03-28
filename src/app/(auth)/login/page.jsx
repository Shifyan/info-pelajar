import Link from 'next/link'

export default function Login() {
  return (
    <>
      <div className='flex justify-center items-center h-screen bg-gray-100'>
        <div className='login-content border rounded-lg bg-white'>
          <div className='flex min-h-full flex-1 flex-col justify-center px-8 py-12 lg:px-12'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
              <h2 className=' text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                Log in to your account
              </h2>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
              <form className='space-y-6' action='#' method='POST'>
                <div>
                  <label
                    htmlFor='username'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Username
                  </label>
                  <div className='mt-2'>
                    <input
                      id='username'
                      name='username'
                      type='text'
                      placeholder='Username'
                      required
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div>
                  <div className='flex items-center justify-between'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Password
                    </label>
                    <div className='text-sm'>
                      <a
                        href='#'
                        className='font-semibold text-indigo-600 hover:text-indigo-500'
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      placeholder='Password'
                      required
                      className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <p className='errors-msg text-red-600 text-sm'>
                    This is an errors message
                  </p>
                  <p className='errors-msg text-red-600 text-sm'>
                    This is an errors message
                  </p>
                </div>
                <div>
                  <button
                    type='submit'
                    className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Log in
                  </button>
                </div>
                <div>
                  <Link
                    href={'/'}
                    className='flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Kembali
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
