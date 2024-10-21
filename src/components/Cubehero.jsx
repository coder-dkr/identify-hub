
const Cubehero = () => {
  return (
    <div className='flex justify-center items-center text-slate-200'>
          <div className='h-[300px] flex flex-col justify-between items-center'>
              <div class="bg-gradient-to-br from-transparent to-white/15 backdrop-blur-xl border-[1px] border-white/20 rounded-2xl px-2 py-1 text-xs flex justify-center items-center gap-3">
                <img src="/tick.svg" alt="" />
                <div>
                <p>One-time passcode</p>
                <p>KABBADI</p>
                </div>
              </div>
              <div class="bg-gradient-to-br from-transparent to-white/15 backdrop-blur-xl border-[1px] border-white/20 rounded-2xl px-2 py-1 text-xs flex justify-center items-center gap-3">
                <img src="/card.svg" alt="" />
                <div>
                <p>Credit card</p>
                <p>123 456 789 1234</p>
                </div>
              </div>

            </div>
            <img className='w-96' src="/cube.svg" alt="" />
            <div className='h-[300px] flex flex-col justify-between items-center'>
            <div class="bg-gradient-to-br from-transparent to-white/15 backdrop-blur-xl border-[1px] border-white/20 rounded-2xl px-2 py-1 text-xs flex justify-center items-center gap-3">
                <img src="/call.svg" alt="" />
                <div>
                <p>Phone numbers</p>
                <p>+91 8917382738</p>
                </div>
              </div>
              <div class="bg-gradient-to-br from-transparent to-white/15 backdrop-blur-xl border-[1px] border-white/20 rounded-2xl px-2 py-1 text-xs flex justify-center items-center gap-3">
                <img src="/email.svg" alt="" />
                <div>
                <p>Email address</p>
                <p>dhruv@roy.com</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Cubehero
