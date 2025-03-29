import {
  SpinningLines,
  Right1,
  Right2,
  Down1,
  Down2,
  Left1,
  Left2,
  Up1,
  Up2,
  LeftSemi1,
  LeftSemi2,
  BottomSemi1,
  BottomSemi2,
  TopSemi1,
  TopSemi2,
  RightSemi1,
  RightSemi2,
  TopRightArrow,
  BottomRightArrow,
} from "./paths/InternalRiskCirclePath";

interface InternalRiskCircleProps {
  activeRiskIndex: number;
  mainTitle: string;
  onSegmentClick?: (segmentIndex: number) => void;
}

const InternalRiskCircle = ({
  activeRiskIndex,
  mainTitle,
  onSegmentClick,
}: InternalRiskCircleProps) => {
  const rotation = activeRiskIndex * 90;

  const activeSegment = (4 - (activeRiskIndex % 4)) % 4;

  return (
    <div className="w-full h-full scale-80 2xl:scale-100">
      <svg
        width="1221"
        height="1221"
        viewBox="0 0 1221 1221"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame 1010109356">
          <g id="Main">
            <g id="BGFrameCircle">
              <circle
                id="BG circle"
                data-figma-bg-blur-radius="20.35"
                cx="609.412"
                cy="611.474"
                r="267.821"
                transform="rotate(-1.78576 609.412 611.474)"
                fill="#F5F5F5"
                fillOpacity="0.1"
              />
            </g>
            <g id="SpinCircle">
              <g id="Lines">
                <path
                  id="Lines_2"
                  d={SpinningLines}
                  stroke="url(#paint0_linear_1638_8755)"
                  strokeWidth="17.4429"
                  strokeDasharray="1.45 8.17"
                  className="animate-dash-reverse"
                />
              </g>
            </g>
            <g
              id="CenterGradientCircle"
              className="[transform-origin:center]"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 1s ease",
              }}
            >
              <g id="Bg" filter="url(#filter1_d_1638_8755)">
                <circle
                  cx="611.661"
                  cy="612.533"
                  r="115.123"
                  fill="url(#paint1_linear_1638_8755)"
                />
                <circle
                  cx="611.661"
                  cy="612.533"
                  r="114.199"
                  stroke="white"
                  strokeOpacity="0.55"
                  strokeWidth="1.84753"
                />
              </g>
              <g
                id="InRight"
                onClick={() => onSegmentClick && onSegmentClick(0)}
                className="cursor-pointer"
              >
                <mask id="path-5-inside-1_1638_8755" fill="white">
                  <path d={Right1} />
                </mask>
                <path
                  d={Right2}
                  fill={
                    activeSegment === 0
                      ? "url(#paint2_linear_1638_8755)"
                      : "#D9D9D9"
                  }
                  fillOpacity={activeSegment === 0 ? "1" : "0.1"}
                  stroke="white"
                  strokeOpacity="0.1"
                  strokeWidth="3.69505"
                  mask="url(#path-5-inside-1_1638_8755)"
                  className="transition-all duration-1000 ease-in-out"
                />
              </g>
              <g
                id="InDown"
                onClick={() => onSegmentClick && onSegmentClick(3)}
                className="cursor-pointer"
              >
                <mask id="path-6-inside-2_1638_8755" fill="white">
                  <path d={Down1} />
                </mask>
                <path
                  d={Down2}
                  fill={
                    activeSegment === 1
                      ? "url(#paint2_linear_1638_8755)"
                      : "#D9D9D9"
                  }
                  fillOpacity={activeSegment === 1 ? "1" : "0.1"}
                  stroke="white"
                  strokeOpacity="0.1"
                  strokeWidth="3.69505"
                  mask="url(#path-6-inside-2_1638_8755)"
                  className="transition-all duration-1000 ease-in-out"
                />
              </g>
              <g
                id="InLeft"
                onClick={() => onSegmentClick && onSegmentClick(2)}
                className="cursor-pointer"
              >
                <mask id="path-7-inside-3_1638_8755" fill="white">
                  <path d={Left1} />
                </mask>
                <path
                  d={Left2}
                  fill={
                    activeSegment === 2
                      ? "url(#paint2_linear_1638_8755)"
                      : "#D9D9D9"
                  }
                  fillOpacity={activeSegment === 2 ? "1" : "0.1"}
                  stroke="white"
                  strokeOpacity="0.1"
                  strokeWidth="3.69505"
                  mask="url(#path-7-inside-3_1638_8755)"
                  className="transition-all duration-1000 ease-in-out"
                />
              </g>
              <g
                id="InTop"
                onClick={() => onSegmentClick && onSegmentClick(1)}
                className="cursor-pointer"
              >
                <mask id="path-8-inside-4_1638_8755" fill="white">
                  <path d={Up1} />
                </mask>
                <path
                  d={Up2}
                  fill={
                    activeSegment === 3
                      ? "url(#paint2_linear_1638_8755)"
                      : "#D9D9D9"
                  }
                  fillOpacity={activeSegment === 3 ? "1" : "0.1"}
                  stroke="white"
                  strokeOpacity="0.1"
                  strokeWidth="3.69505"
                  mask="url(#path-8-inside-4_1638_8755)"
                  className="transition-all duration-1000 ease-out"
                />
              </g>
            </g>
            {/* TEXT HERE */}
            <foreignObject
              x="600"
              y="510"
              width="80"
              height="200"
              className="[transform-origin:center]"
            >
              <div className="peer w-full h-full flex flex-col items-center justify-center text-center text-white font-bold rotate-270">
                <p className={`tracking-[-1px] text-[1.75rem] font-light`}>
                  {mainTitle}
                </p>
              </div>
            </foreignObject>
            <g id="Frame 1010108996">
              <path
                id="Icon"
                d="M442.458 802.273L427.967 805.287L430.98 819.778"
                stroke="white"
                strokeOpacity="0.25"
                strokeWidth="3.48857"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                id="Icon_2"
                d="M418.442 778.285L418.272 793.085L403.472 792.915"
                stroke="white"
                strokeOpacity="0.25"
                strokeWidth="3.48857"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </g>
            <g id="Frame 1010108999">
              <path
                id="Icon_3"
                d="M433.266 404.418L433.591 419.215L448.388 418.89"
                stroke="white"
                strokeOpacity="0.25"
                strokeWidth="3.48857"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                id="Icon_4"
                d="M407.177 428.98L421.974 429.326L421.628 444.123"
                stroke="white"
                strokeOpacity="0.25"
                strokeWidth="3.48857"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </g>
            <g
              id="OuterCircle"
              className="[transform-origin:center]"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 1s ease",
              }}
            >
              <g id="LeftSemi" filter="url(#filter2_dd_1638_8755)">
                <mask id="path-14-inside-5_1638_8755" fill="white">
                  <path d={LeftSemi1} />
                </mask>
                <path
                  d={LeftSemi2}
                  stroke="white"
                  strokeOpacity="0.15"
                  strokeWidth="27.9086"
                  shapeRendering="crispEdges"
                  mask="url(#path-14-inside-5_1638_8755)"
                  fill={
                    activeSegment === 2
                      ? "url(#paint3_linear_1638_8755)"
                      : "#ffffff"
                  }
                  fillOpacity={activeSegment === 2 ? "1" : "0.1"}
                  className="transition-all duration-1000 ease-out"
                />
              </g>
              <g id="BottomSemi" filter="url(#filter3_dd_1638_8755)">
                <mask id="path-15-inside-6_1638_8755" fill="white">
                  <path d={BottomSemi1} />
                </mask>
                <path
                  d={BottomSemi2}
                  stroke="white"
                  strokeOpacity="0.15"
                  strokeWidth="27.9086"
                  mask="url(#path-15-inside-6_1638_8755)"
                  fill={
                    activeSegment === 1
                      ? "url(#paint3_linear_1638_8755)"
                      : "#ffffff"
                  }
                  fillOpacity={activeSegment === 1 ? "1" : "0.1"}
                  className="transition-all duration-1000 ease-out"
                />
              </g>
              <g id="TopSemi" filter="url(#filter4_dd_1638_8755)">
                <mask id="path-16-inside-7_1638_8755" fill="white">
                  <path d={TopSemi1} />
                </mask>
                <path
                  d={TopSemi2}
                  stroke="white"
                  strokeOpacity="0.15"
                  strokeWidth="27.9086"
                  shapeRendering="crispEdges"
                  mask="url(#path-16-inside-7_1638_8755)"
                  fill={
                    activeSegment === 3
                      ? "url(#paint3_linear_1638_8755)"
                      : "#ffffff"
                  }
                  fillOpacity={activeSegment === 3 ? "1" : "0.1"}
                  className="transition-all duration-1000 ease-out"
                />
              </g>
              <g
                id="RightSemi"
                filter="url(#filter5_dd_1638_8755)"
                data-figma-bg-blur-radius="10.175"
              >
                <mask id="path-17-inside-8_1638_8755" fill="white">
                  <path d={RightSemi1} />
                </mask>
                <path
                  d={RightSemi2}
                  stroke="white"
                  strokeOpacity="0.15"
                  strokeWidth="27.9086"
                  mask="url(#path-17-inside-8_1638_8755)"
                  fill={
                    activeSegment === 0
                      ? "url(#paint3_linear_1638_8755)"
                      : "#ffffff"
                  }
                  fillOpacity={activeSegment === 0 ? "1" : "0.1"}
                  className="transition-all duration-1000 ease-out"
                />
              </g>
            </g>
            <g id="Frame 1010108998">
              <path
                id="Icon_5"
                d="M780.802 421.375L795.515 419.774L793.914 405.06"
                stroke="white"
                strokeOpacity="0.25"
                strokeWidth="3.48857"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                id="Icon_6"
                d="M807.524 445.246L806.591 430.475L821.363 429.542"
                stroke="white"
                strokeOpacity="0.25"
                strokeWidth="3.48857"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </g>
            <g id="Frame 1010108997">
              <path
                id="Icon_7"
                d="M799.632 820.012L800.058 805.217L785.263 804.792"
                stroke="white"
                strokeOpacity="0.25"
                strokeWidth="3.48857"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                id="Icon_8"
                d="M825.812 796.305L811.141 794.354L813.091 779.682"
                stroke="white"
                strokeOpacity="0.25"
                strokeWidth="3.48857"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </g>
            <g id="BottomRightArrow" opacity="0.25">
              <path
                id="Subtract"
                fillRule="evenodd"
                clipRule="evenodd"
                d={BottomRightArrow}
                fill="white"
              />
            </g>
            <g id="TopRightArrow" opacity="0.25">
              <path
                id="Subtract_3"
                fillRule="evenodd"
                clipRule="evenodd"
                d={TopRightArrow}
                fill="white"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath
            id="bgblur_0_1638_8755_clip_path"
            transform="translate(-321.239 -323.298)"
          >
            <circle
              cx="609.412"
              cy="611.474"
              r="267.821"
              transform="rotate(-1.78576 609.412 611.474)"
            />
          </clipPath>
          <filter
            id="filter1_d_1638_8755"
            x="491.305"
            y="492.177"
            width="240.711"
            height="240.712"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2.61643" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.109804 0 0 0 0 0.462745 0 0 0 0 0.992157 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1638_8755"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1638_8755"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_dd_1638_8755"
            x="284.318"
            y="402.013"
            width="104.888"
            height="414.716"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.523286" />
            <feGaussianBlur stdDeviation="0.784929" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1638_8755"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="4.36071" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_1638_8755"
              result="effect2_dropShadow_1638_8755"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_1638_8755"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_dd_1638_8755"
            x="306.688"
            y="747.822"
            width="615.452"
            height="300.209"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="8.72143" />
            <feGaussianBlur stdDeviation="52.3286" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1638_8755"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="17.4429" />
            <feGaussianBlur stdDeviation="13.0821" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_1638_8755"
              result="effect2_dropShadow_1638_8755"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_1638_8755"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_dd_1638_8755"
            x="406.91"
            y="284.318"
            width="414.521"
            height="103.615"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.523286" />
            <feGaussianBlur stdDeviation="0.784929" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1638_8755"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="4.36071" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_1638_8755"
              result="effect2_dropShadow_1638_8755"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_1638_8755"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_dd_1638_8755"
            x="840.859"
            y="402.661"
            width="105.416"
            height="414.323"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.523286" />
            <feGaussianBlur stdDeviation="0.784929" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1638_8755"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="4.36071" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_1638_8755"
              result="effect2_dropShadow_1638_8755"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_1638_8755"
              result="shape"
            />
          </filter>
          <clipPath
            id="bgblur_1_1638_8755_clip_path"
            transform="translate(-840.859 -402.661)"
          >
            <path d="M868.653 806.807C912.811 750.505 936.583 680.899 936.092 609.348C935.601 537.797 910.875 468.525 865.949 412.834L851.034 424.866C893.239 477.184 916.468 542.262 916.929 609.48C917.391 676.698 895.058 742.088 853.575 794.981L868.653 806.807Z" />
          </clipPath>
          <linearGradient
            id="paint0_linear_1638_8755"
            x1="377.857"
            y1="605.622"
            x2="850.042"
            y2="605.622"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1C76FD" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1638_8755"
            x1="483.214"
            y1="608.369"
            x2="738.588"
            y2="608.369"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1C76FD" />
            <stop offset="1" stopColor="#5721F0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1638_8755"
            x1="409.942"
            y1="605.973"
            x2="810.415"
            y2="605.973"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1C76FD" />
            <stop offset="1" stopColor="#5721F0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1638_8755"
            x1="919"
            y1="600.074"
            x2="946"
            y2="600.074"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1C76FD" />
            <stop offset="1" stopColor="#5721F0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default InternalRiskCircle;
