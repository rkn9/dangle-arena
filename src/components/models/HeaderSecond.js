import React from "react";
import { FaChevronRight } from "react-icons/fa";
function HeaderSecond() {
  return (
    <div className="absolute right-[0] border-orange border-2 top-[50px]">
      <ul className="*:flex *:items-center *:gap-4 *:justify-between *:p-4 bg-header w-[300px] *:cursor-pointer ">
        <li>
          <p className="flex gap-2">
            <img
              src="https://s3-alpha-sig.figma.com/img/cbd9/75b3/772f76bc0d9f8f77fc437be015a23a00?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mi2aMjCfiBR2Ol2mVv5xpgjYAwZMnJiLmoOMUdVm0JVqXf~XclbsjBV4uZriwovfEfHctKzi0wA4nx1Tdj5-KMaMLGzdtn2xBqVouRuL8~sNUdtGX~5n468dW8MYBMV53~dviM2-s5TtEscLBjcj24e067C3Po7oSXnJeocsj2Sr0akufDldh4zmIaofzvOhZMT8sItcoWb4x-U31P12ObIKIicUaRJp1C-d6~yr-aF5d8xqxKUsleBPCFviudogtTSjsTMrGgSyK5dC066bEXrPbjkgZva8Q4yP2zJOz6T78rLGpQ0zjPIe3NKWO0sMB-1w8Vme~KgEqoyQ5nEMrg__"
              alt="person"
              className="w-6"
            />
            <strong>Rahul Yadav</strong>
          </p>
        </li>
        <li className="border-t-2 border-t-orange">
          <div className="flex ">
            <img src="#" alt="ab" />
            <span> About Us</span>
          </div>
          <FaChevronRight color="orange" />
        </li>
        <li className="border-t-2 border-t-orange">
          <div className="flex ">
            <img src="#" alt="ab" />
            <span> Terms & Condition</span>
          </div>
          <FaChevronRight color="orange" />
        </li>
        <li className="border-t-2 border-t-orange">
          <div className="flex ">
            <img src="#" alt="ab" />
            <span> Privacy Policy</span>
          </div>
          <FaChevronRight color="orange" />
        </li>
        <li className="border-t-2 border-t-orange">
          <div className="flex ">
            <img src="#" alt="ab" />
            <span> Share App</span>
          </div>
          <FaChevronRight color="orange" />
        </li>
      </ul>
    </div>
  );
}

export default HeaderSecond;
