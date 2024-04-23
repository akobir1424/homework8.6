import { Link } from "react-router-dom";


export default function SideBarSecond() {

    return (
      <>
        <div className="bg-white border w-24 h-screen flex flex-col items-center justify-center">
          <div className=" w-[90%] h-[95%] flex flex-col items-center gap-8">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="20"
                  fill="url(#paint0_linear_195_1736)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.3883 29.0181C24.0668 29.0181 26.0475 27.9131 27.3306 25.7032C28.2769 24.0638 28.75 22.0628 28.75 19.7001C28.75 18.7679 28.6377 17.7875 28.4132 16.7588C28.1887 15.7302 27.7676 14.7739 27.1502 13.8899C26.3803 12.797 25.3739 12.0456 24.1309 11.6357C23.4012 11.3947 22.487 11.2661 21.3883 11.25H13.75V29.0181H21.3883Z"
                  fill="white"
                />
                <mask
                  id="mask0_195_1736"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="13"
                  y="11"
                  width="16"
                  height="19"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.3883 29.0181C24.0668 29.0181 26.0475 27.9131 27.3306 25.7032C28.2769 24.0638 28.75 22.0628 28.75 19.7001C28.75 18.7679 28.6377 17.7875 28.4132 16.7588C28.1887 15.7302 27.7676 14.7739 27.1502 13.8899C26.3803 12.797 25.3739 12.0456 24.1309 11.6357C23.4012 11.3947 22.487 11.2661 21.3883 11.25H13.75V29.0181H21.3883Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_195_1736)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.3465 25.932V14.3358H20.7627C22.4467 14.3358 23.5714 14.8199 24.1368 15.7883C24.7022 16.7567 24.9848 18.1449 24.9848 19.9531C24.9848 21.263 24.7964 22.3921 24.4195 23.3404C23.7298 25.0681 22.5109 25.932 20.7627 25.932H17.3465Z"
                    fill="#0E73F6"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_195_1736"
                    x1="-7.73094e-06"
                    y1="40"
                    x2="40"
                    y2="-1.72677e-05"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0974E9" />
                    <stop offset="1" stopColor="#3593F9" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <ul className="gap-4 rounded-md w-10 h-[233px] flex flex-col ul-item">
              <Link to="/orders">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_4634_2307)">
                      <path
                        d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 3C1 3.55 1.45 4 2 4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H18C18.55 17 19 16.55 19 16C19 15.45 18.55 15 18 15H7L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.54 2.57C4.38 2.22 4.02 2 3.64 2H2C1.45 2 1 2.45 1 3ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4634_2307">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
              </Link>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11C7.20435 11 6.44129 10.6839 5.87868 10.1213C5.31607 9.55871 5 8.79565 5 8C5 7.20435 5.31607 6.44129 5.87868 5.87868C6.44129 5.31607 7.20435 5 8 5C8.79565 5 9.55871 5.31607 10.1213 5.87868C10.6839 6.44129 11 7.20435 11 8ZM19 8C19 8.39397 18.9224 8.78407 18.7716 9.14805C18.6209 9.51203 18.3999 9.84274 18.1213 10.1213C17.8427 10.3999 17.512 10.6209 17.1481 10.7716C16.7841 10.9224 16.394 11 16 11C15.606 11 15.2159 10.9224 14.8519 10.7716C14.488 10.6209 14.1573 10.3999 13.8787 10.1213C13.6001 9.84274 13.3791 9.51203 13.2284 9.14805C13.0776 8.78407 13 8.39397 13 8C13 7.20435 13.3161 6.44129 13.8787 5.87868C14.4413 5.31607 15.2044 5 16 5C16.7956 5 17.5587 5.31607 18.1213 5.87868C18.6839 6.44129 19 7.20435 19 8ZM14.93 19C14.976 18.673 15 18.34 15 18C15.0023 16.4289 14.4737 14.903 13.5 13.67C14.2601 13.2312 15.1223 13.0001 16 13.0001C16.8776 13.0001 17.7399 13.2311 18.4999 13.67C19.26 14.1088 19.8912 14.74 20.3301 15.5C20.7689 16.2601 21 17.1223 21 18V19H14.93ZM8 13C9.32608 13 10.5979 13.5268 11.5355 14.4645C12.4732 15.4021 13 16.6739 13 18V19H3V18C3 16.6739 3.52678 15.4021 4.46447 14.4645C5.40215 13.5268 6.67392 13 8 13Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_4634_2314)">
                    <path
                      d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.48 6.83 17.17 3.52 13 3.06V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V3.06C6.83 3.52 3.52 6.83 3.06 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13H3.06C3.52 17.17 6.83 20.48 11 20.94V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20.94C17.17 20.48 20.48 17.17 20.94 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4634_2314">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </li>
              <Link to="/dashboard" >
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_195_1749)">
                      <path
                        d="M15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM6.66667 14.1667C6.20833 14.1667 5.83333 13.7917 5.83333 13.3333V10.8333C5.83333 10.375 6.20833 10 6.66667 10C7.125 10 7.5 10.375 7.5 10.8333V13.3333C7.5 13.7917 7.125 14.1667 6.66667 14.1667ZM10 14.1667C9.54167 14.1667 9.16667 13.7917 9.16667 13.3333V12.5C9.16667 12.0417 9.54167 11.6667 10 11.6667C10.4583 11.6667 10.8333 12.0417 10.8333 12.5V13.3333C10.8333 13.7917 10.4583 14.1667 10 14.1667ZM10 10C9.54167 10 9.16667 9.625 9.16667 9.16667C9.16667 8.70833 9.54167 8.33333 10 8.33333C10.4583 8.33333 10.8333 8.70833 10.8333 9.16667C10.8333 9.625 10.4583 10 10 10ZM13.3333 14.1667C12.875 14.1667 12.5 13.7917 12.5 13.3333V6.66667C12.5 6.20833 12.875 5.83333 13.3333 5.83333C13.7917 5.83333 14.1667 6.20833 14.1667 6.66667V13.3333C14.1667 13.7917 13.7917 14.1667 13.3333 14.1667Z"
                        fill="#fff"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_195_1749">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </>
    );
  }
  