import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="section   flex items-center">
      <div className="flex flex-col  justify-between h-full w-full items-center md:flex-row-reverse">
        <div className="relative h-[431px] w-[385px] flex justify-center items-center">
          <div className="absolute bg-gradient-radial h-full w-full  -z-[1]"></div>
          <Image src="/me.webp" alt="me" height={300} width={300} />
        </div>
        <div className="flex flex-col gap-1">
          <div className="leading-8 pb-2">
            <span className="text-lg">Hi my name is</span>
            <h1 className="text-secondary text-5xl">Karan Singh</h1>
            <span className="text-[17px] ">A Full Stack Developer who</span>
          </div>
          <div className="pb-4">
            <div className="text-4xl pb-1">
              Judges a book <br /> by its{" "}
              <span className="text-secondary">cover</span>
              ...
            </div>
            <span className="text-sm ">
              Because if the cover does not impress you what else can?
            </span>
          </div>
          <div className="md:cursor-pointer" >
            <a href="mailto:karanrsingh2662006@gmail.com">


            <svg
              width="114 "
              height="37"
              viewBox="0 0 114 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H114C85.0312 14.4515 85.7026 22.5464 114 37H0V0Z"
                fill="#7127BA"
              />
              <path
                d="M20.3508 20.7004L21.7762 21.6947C21.1779 22.5628 20.4065 23.2521 19.4621 23.7624C18.9986 24.0088 18.5059 24.1994 17.9838 24.3344C17.4676 24.4693 16.9309 24.5367 16.3736 24.5367C15.7577 24.5367 15.1681 24.4575 14.605 24.2992C13.4787 23.9765 12.4991 23.3899 11.6661 22.5394C11.2672 22.1346 10.9211 21.6771 10.6278 21.1667C10.3404 20.6622 10.1175 20.1196 9.9591 19.5389C9.80071 18.9582 9.72152 18.354 9.72152 17.7263C9.72152 17.0986 9.80071 16.4944 9.9591 15.9137C10.2759 14.7463 10.8449 13.7433 11.6661 12.9044C12.065 12.4997 12.5137 12.1448 13.0124 11.8397C13.5051 11.5464 14.036 11.3206 14.605 11.1622C15.174 10.998 15.7635 10.9158 16.3736 10.9158C16.8957 10.9158 17.4001 10.9745 17.887 11.0918C18.3739 11.2091 18.8373 11.3763 19.2773 11.5934C20.163 12.0274 20.9168 12.6375 21.5386 13.4236L20.1924 14.5234C19.7348 13.9544 19.1776 13.5027 18.5206 13.1684C17.8694 12.834 17.1538 12.6668 16.3736 12.6668C15.6931 12.6668 15.0567 12.8018 14.4642 13.0716C13.8717 13.3356 13.3526 13.6963 12.9068 14.1539C12.461 14.6114 12.109 15.1482 11.8509 15.7641C11.5986 16.3742 11.4725 17.0282 11.4725 17.7263C11.4725 18.4243 11.5986 19.0813 11.8509 19.6973C12.109 20.3132 12.461 20.8499 12.9068 21.3075C13.3526 21.765 13.8717 22.1287 14.4642 22.3986C15.0567 22.6625 15.6931 22.7945 16.3736 22.7945C16.7842 22.7945 17.1802 22.7447 17.5615 22.6449C17.9428 22.5452 18.3035 22.4044 18.6437 22.2226C19.3242 21.8589 19.8932 21.3515 20.3508 20.7004ZM32.7043 19.7325C32.7043 20.4716 32.5811 21.155 32.3347 21.7826C32.0883 22.4103 31.751 22.9558 31.3228 23.4193C30.8946 23.8827 30.393 24.2434 29.8182 24.5015C29.2433 24.7655 28.6303 24.8975 27.9792 24.8975C26.6476 24.8975 25.5418 24.4224 24.6619 23.4721C24.2337 23.0204 23.8964 22.4778 23.65 21.8442C23.4037 21.2107 23.2805 20.5068 23.2805 19.7325C23.2805 18.9523 23.4037 18.2454 23.65 17.6119C23.8964 16.9725 24.2337 16.427 24.6619 15.9753C25.0843 15.5236 25.58 15.1746 26.149 14.9282C26.718 14.6818 27.328 14.5586 27.9792 14.5586C28.6303 14.5586 29.2433 14.6906 29.8182 14.9546C30.393 15.2127 30.8946 15.5705 31.3228 16.0281C31.751 16.4915 32.0883 17.04 32.3347 17.6735C32.5811 18.3012 32.7043 18.9875 32.7043 19.7325ZM30.8477 19.7149C30.8477 19.2925 30.7949 18.8643 30.6893 18.4302C30.5837 17.9961 30.4165 17.609 30.1877 17.2687C29.959 16.9226 29.6627 16.644 29.299 16.4328C28.9353 16.2158 28.4954 16.1073 27.9792 16.1073C27.4806 16.1073 27.0523 16.2158 26.6945 16.4328C26.3367 16.644 26.0434 16.9226 25.8146 17.2687C25.5858 17.609 25.4187 17.9961 25.3131 18.4302C25.2075 18.8643 25.1547 19.2925 25.1547 19.7149C25.1547 20.1372 25.2104 20.5625 25.3219 20.9907C25.4392 21.4131 25.6152 21.7973 25.8498 22.1434C26.0844 22.4836 26.3777 22.7652 26.7297 22.9881C27.0875 23.2052 27.504 23.3137 27.9792 23.3137C28.4778 23.3137 28.906 23.2052 29.2638 22.9881C29.6275 22.7652 29.9267 22.4836 30.1613 22.1434C30.396 21.7973 30.569 21.4131 30.6805 20.9907C30.7919 20.5625 30.8477 20.1372 30.8477 19.7149ZM37.165 24.4136L35.2732 24.6511L35.0972 19.7149C35.0855 19.3805 35.0738 19.0227 35.062 18.6414C35.0503 18.2542 35.0386 17.8905 35.0268 17.5503C35.0151 17.2042 35.0063 16.9314 35.0004 16.732C34.977 15.9049 34.9594 15.2831 34.9477 14.8666L36.9538 14.8314L36.989 17.3655C37.1826 17.0312 37.4026 16.7173 37.649 16.424C37.8953 16.1249 38.1622 15.8609 38.4497 15.6321C38.7371 15.4033 39.0421 15.2186 39.3648 15.0778C39.6933 14.937 40.0364 14.8549 40.3943 14.8314C40.8459 14.8021 41.236 14.8402 41.5645 14.9458C41.893 15.0514 42.1746 15.198 42.4092 15.3857C42.6439 15.5676 42.8375 15.7876 42.99 16.0457C43.1484 16.3096 43.2686 16.5736 43.3507 16.8376C43.4387 17.1074 43.5003 17.3802 43.5355 17.6559C43.5766 17.9257 43.603 18.1721 43.6147 18.395C43.6499 19.404 43.6587 20.4188 43.6411 21.4395C43.6235 22.4602 43.603 23.519 43.5795 24.6159L41.7757 24.5543C41.8226 23.6099 41.8637 22.6655 41.8989 21.721C41.94 20.7766 41.937 19.8234 41.8901 18.8614C41.8901 18.6561 41.8666 18.4214 41.8197 18.1574C41.7728 17.8876 41.6877 17.6207 41.5645 17.3567C41.4765 17.1749 41.3622 17.0136 41.2214 16.8728C41.0806 16.7379 40.9075 16.6352 40.7022 16.5648C40.5028 16.4944 40.2681 16.4798 39.9983 16.5208C39.5349 16.5912 39.0656 16.9285 38.5905 17.5327C38.1212 18.1193 37.605 19.008 37.0418 20.1988L37.1034 22.4514C37.1093 22.7329 37.1152 22.9793 37.121 23.1905C37.1269 23.4017 37.1327 23.5806 37.1386 23.7272C37.1503 24.0675 37.1591 24.2962 37.165 24.4136ZM48.5242 15.2978L48.5946 11.4438L50.3456 11.3294L50.284 15.2626L53.6981 15.1482L53.5661 16.7936L50.2664 16.8816L50.196 24.5543L48.3394 24.5983L48.489 16.9344L45.4446 17.0048L45.4798 15.3857L48.5242 15.2978ZM64.0102 24.8447L62.2856 24.5543L62.4087 23.3137C61.6931 23.7712 60.9892 24.1027 60.297 24.308C59.6107 24.5133 58.9683 24.6159 58.37 24.6159C57.9476 24.6159 57.537 24.5602 57.1381 24.4488C56.7451 24.3432 56.399 24.176 56.0998 23.9472C55.7948 23.7243 55.5484 23.4398 55.3607 23.0937C55.1789 22.7417 55.0879 22.3282 55.0879 21.853C55.0879 21.3779 55.1583 20.9526 55.2991 20.5772C55.4399 20.2017 55.6335 19.8703 55.8799 19.5829C56.1262 19.2954 56.4166 19.0491 56.751 18.8438C57.0853 18.6385 57.4461 18.4713 57.8332 18.3422C58.2145 18.2132 58.6164 18.1193 59.0387 18.0607C59.4611 17.9961 59.8805 17.9639 60.297 17.9639C60.6841 17.9639 61.0449 17.9785 61.3793 18.0079C61.7136 18.0372 62.0099 18.0753 62.268 18.1222C62.1624 17.7058 62.0187 17.3157 61.8368 16.952C61.6608 16.5883 61.4262 16.295 61.1329 16.0721C60.8455 15.8433 60.473 15.7289 60.0154 15.7289C59.7866 15.7289 59.5256 15.7641 59.2323 15.8345C58.939 15.899 58.6164 16.0193 58.2644 16.1953C57.9124 16.3712 57.5282 16.6147 57.1117 16.9256C56.6952 17.2306 56.2494 17.6236 55.7743 18.1046L54.7096 16.8112C55.2727 16.2832 55.8124 15.8521 56.3286 15.5177C56.8448 15.1834 57.3317 14.9194 57.7893 14.7258C58.2409 14.5381 58.6604 14.409 59.0475 14.3387C59.4405 14.2683 59.7925 14.2331 60.1034 14.2331C60.6489 14.2331 61.13 14.324 61.5464 14.5058C61.9688 14.6877 62.3413 14.9399 62.6639 15.2626C62.9866 15.5793 63.2564 15.9547 63.4734 16.3888C63.6846 16.8053 63.8635 17.2687 64.0102 17.7791C64.151 18.2777 64.2507 18.7939 64.3093 19.3277C64.3739 19.8615 64.4061 20.3924 64.4061 20.9203C64.4061 21.4835 64.3739 22.0877 64.3093 22.7329C64.2448 23.3782 64.1451 24.0821 64.0102 24.8447ZM62.5319 21.3515C62.5437 21.0582 62.5525 20.7678 62.5583 20.4804C62.5642 20.193 62.5495 19.8938 62.5143 19.5829C62.2269 19.4949 61.9248 19.4245 61.608 19.3717C61.2913 19.3189 60.9745 19.2925 60.6577 19.2925C60.1298 19.2925 59.6165 19.3541 59.1179 19.4773C58.6252 19.6005 58.1999 19.7794 57.842 20.014C57.4842 20.2487 57.2144 20.5361 57.0325 20.8763C56.8566 21.2166 56.8214 21.6037 56.9269 22.0378C57.0091 22.3898 57.1675 22.6361 57.4021 22.7769C57.6426 22.9177 57.93 22.9881 58.2644 22.9881C58.6985 22.9881 59.1854 22.8972 59.725 22.7153C60.2647 22.5276 60.7839 22.3047 61.2825 22.0466C61.7869 21.7885 62.2034 21.5568 62.5319 21.3515ZM76.1613 17.3655L76.1789 17.4007L74.7182 18.2894L74.7006 18.2366C74.3956 17.6383 73.9674 17.169 73.416 16.8288C72.8646 16.4827 72.2545 16.3096 71.5858 16.3096C71.1048 16.3096 70.6531 16.4006 70.2307 16.5824C69.8142 16.7643 69.4506 17.0136 69.1397 17.3303C68.8229 17.6471 68.5736 18.0196 68.3917 18.4478C68.2099 18.8702 68.119 19.3218 68.119 19.8029C68.119 20.278 68.2099 20.7268 68.3917 21.1491C68.5736 21.5715 68.8229 21.941 69.1397 22.2578C69.4506 22.5746 69.8142 22.8239 70.2307 23.0057C70.6531 23.1876 71.1048 23.2785 71.5858 23.2785C72.1959 23.2785 72.7737 23.1201 73.3192 22.8033C73.8647 22.4866 74.29 22.0671 74.5951 21.5451L74.6303 21.4923L76.1613 22.3634L76.1437 22.4162C75.9149 22.7975 75.6363 23.1406 75.3078 23.4457C74.9851 23.7507 74.6244 24.0147 74.2255 24.2376C73.4101 24.6893 72.5302 24.9151 71.5858 24.9151C70.9229 24.9151 70.2835 24.786 69.6676 24.5279C69.0517 24.2698 68.5003 23.912 68.0134 23.4545C67.5324 22.9969 67.1452 22.4572 66.8519 21.8354C66.5586 21.2136 66.412 20.5361 66.412 19.8029C66.412 19.3629 66.4735 18.9288 66.5967 18.5006C66.8431 17.6324 67.2801 16.8786 67.9078 16.2392C68.0603 16.075 68.2246 15.9254 68.4005 15.7905C68.5765 15.6497 68.7584 15.5207 68.9461 15.4033C69.3274 15.1746 69.7409 14.9957 70.1867 14.8666C70.6326 14.7317 71.0989 14.6642 71.5858 14.6642C72.5947 14.6642 73.5069 14.9018 74.3223 15.3769C75.1259 15.8521 75.7389 16.515 76.1613 17.3655ZM80.3317 15.2978L80.4021 11.4438L82.1531 11.3294L82.0915 15.2626L85.5055 15.1482L85.3735 16.7936L82.0739 16.8816L82.0035 24.5543L80.1469 24.5983L80.2965 16.9344L77.252 17.0048L77.2872 15.3857L80.3317 15.2978Z"
                fill="white"
              />
            </svg>
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;