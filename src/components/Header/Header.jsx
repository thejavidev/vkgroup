import { useCallback, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import Upper from './Upper';

const Header = () => {
  const [t, i18n] = useTranslation("translation");
  const [open, setOpen] = useState(false);
  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
    setOpen(false);
  }
  const langChecker = (lang = "az") => {
    return lang !== localStorage.getItem("i18nextLng")
  }
  const langs = ["az", "ru", "en"];
  const myLang = langs.filter(langChecker);
  return (
    <div>
      header
      <div className="languages absolute top-[50px] lg:top-[10px] right-[10px] lg:right-20 z-[200]">
        <Upper
          toggle={() => setOpen(!open)}
          switchLang={
            open && (
              <div className="absolute  mt-6 right-[7px] top-1 h-[50px] flex flex-col text-left items-end">
                {myLang.map((lang, index) => (
                  <button className='uppercase text-[12px] text-black mt-2 hoverIcon' key={index} onClick={() => clickHandle(lang)} >
                    {lang}
                  </button>
                ))}
              </div>
            )}
        />
      </div>

    </div>
  )
}

export default Header
