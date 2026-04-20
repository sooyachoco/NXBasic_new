import { useState } from 'react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Radio } from './components/Radio'
import { Input } from './components/Input'

function App() {
  const [checked, setChecked] = useState(false)
  const [radio, setRadio] = useState('a')

  return (
    <div className="min-h-screen bg-lb-100 p-10 font-sans">
      <h1 className="text-32-bold text-bc-1000 mb-2">Nexon Design System</h1>
      <p className="text-16-regular text-bc-500 mb-10">React + Tailwind CSS</p>

      {/* Button */}
      <section className="mb-10">
        <h2 className="text-20-bold text-bc-1000 mb-4">Button</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="filled" colorType="primary1" size="medium">Filled Primary</Button>
          <Button variant="outlined" colorType="primary1" size="medium">Outlined</Button>
          <Button variant="ghost" colorType="primary1" size="medium">Ghost</Button>
          <Button variant="filled" colorType="primary1" size="medium" disabled>Disabled</Button>
        </div>
        <div className="flex flex-wrap gap-3 mt-3">
          <Button variant="filled" colorType="primary1" size="xxsmall">XXSmall</Button>
          <Button variant="filled" colorType="primary1" size="xsmall">XSmall</Button>
          <Button variant="filled" colorType="primary1" size="small">Small</Button>
          <Button variant="filled" colorType="primary1" size="medium">Medium</Button>
          <Button variant="filled" colorType="primary1" size="large">Large</Button>
          <Button variant="filled" colorType="primary1" size="xlarge">XLarge</Button>
        </div>
      </section>

      {/* Checkbox */}
      <section className="mb-10">
        <h2 className="text-20-bold text-bc-1000 mb-4">Checkbox</h2>
        <div className="flex flex-col gap-3">
          <Checkbox size="medium" label="Medium 체크박스" checked={checked} onChange={setChecked} />
          <Checkbox size="small" label="Small 체크박스" defaultChecked />
          <Checkbox size="xsmall" label="Xsmall 체크박스" />
          <Checkbox size="medium" label="Error 상태" state="error" />
          <Checkbox size="medium" label="Disabled 상태" state="disabled" />
        </div>
      </section>

      {/* Radio */}
      <section className="mb-10">
        <h2 className="text-20-bold text-bc-1000 mb-4">Radio</h2>
        <div className="flex flex-col gap-3">
          <Radio size="medium" label="옵션 A" name="group" checked={radio === 'a'} onChange={() => setRadio('a')} />
          <Radio size="medium" label="옵션 B" name="group" checked={radio === 'b'} onChange={() => setRadio('b')} />
          <Radio size="medium" label="Disabled" state="disabled" />
          <Radio size="medium" label="Error" state="error" checked />
        </div>
      </section>

      {/* Input */}
      <section className="mb-10">
        <h2 className="text-20-bold text-bc-1000 mb-4">Input</h2>
        <div className="flex flex-col gap-4 max-w-sm">
          <Input variant="outlined" size="medium" label="이메일" placeholder="이메일을 입력하세요" />
          <Input variant="outlined" size="medium" label="비밀번호" placeholder="비밀번호" type="password" message="8자 이상 입력해주세요" />
          <Input variant="outlined" size="medium" label="글자 수 제한" placeholder="최대 20자" maxLength={20} counter />
          <Input variant="outlined" size="medium" label="에러 상태" placeholder="입력값을 확인하세요" state="error" message="올바르지 않은 형식입니다" />
          <Input variant="filled" size="medium" label="Filled" placeholder="Filled variant" />
          <Input variant="underlined" size="medium" label="Underlined" placeholder="Underlined variant" />
        </div>
      </section>

      {/* Colors */}
      <section className="mb-10">
        <h2 className="text-20-bold text-bc-1000 mb-4">Color Tokens — Point Color (pc)</h2>
        <div className="flex gap-2 flex-wrap">
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-pc-100" /><span className="text-11-regular text-bc-500">100</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-pc-200" /><span className="text-11-regular text-bc-500">200</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-pc-300" /><span className="text-11-regular text-bc-500">300</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-pc-400" /><span className="text-11-regular text-bc-500">400</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-pc-500" /><span className="text-11-regular text-bc-500">500</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-pc-600" /><span className="text-11-regular text-bc-500">600</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-pc-700" /><span className="text-11-regular text-bc-500">700</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-pc-800" /><span className="text-11-regular text-bc-500">800★</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-pc-900" /><span className="text-11-regular text-bc-500">900</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-pc-1000" /><span className="text-11-regular text-bc-500">1000</span></div>
        </div>
        <h2 className="text-20-bold text-bc-1000 mt-6 mb-4">Color Tokens — Basic Color (bc)</h2>
        <div className="flex gap-2 flex-wrap">
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-bc-100 border border-bc-200" /><span className="text-11-regular text-bc-500">100</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-bc-200" /><span className="text-11-regular text-bc-500">200</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-bc-300" /><span className="text-11-regular text-bc-500">300</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-bc-400" /><span className="text-11-regular text-bc-500">400</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-bc-500" /><span className="text-11-regular text-bc-500">500</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-bc-600" /><span className="text-11-regular text-bc-500">600</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-bc-700" /><span className="text-11-regular text-bc-500">700</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-bc-800" /><span className="text-11-regular text-bc-500">800</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-bc-900" /><span className="text-11-regular text-bc-500">900</span></div>
          <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded bg-bc-1000" /><span className="text-11-regular text-bc-500">1000★</span></div>
        </div>
      </section>
    </div>
  )
}

export default App
