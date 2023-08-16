import { FC } from 'react'

export default function Home() {
  return (
    <main className='grid h-full place-items-center'>
      <h1 className='text-center'>jiswitch prototype</h1>
    </main>
  )
}

type Props = {
  a: string
  bb: string
  ccc: string
}

export const Hoge: FC<Props> = ({ a, bb, ccc }) => <p>{`${a + bb + ccc}`}</p>
