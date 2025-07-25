"use strict";
// Sweet Alert CDN through JS
let script = document.createElement("script");
script.type = 'text/javascript';
script.src="https://unpkg.com/sweetalert/dist/sweetalert.min.js";
document.body.appendChild(script);

// Header

let header = $(`
<nav class="navbar navbar-expand-lg fixed-top dark-theme" id="navbar">
<a class="navbar-brand" href="index.html">Lizeth </a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item nav-item-hover"><a class="nav-link" href="index.html">Home</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="experience.html">Experience</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="projects.html">Projects</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="education.html">Education</a></li>
   <li class="nav-item">
   <input type="checkbox" id="dark_toggler" class="dark_toggler" aria-label="Toggle Light Mode" onclick="toggle_light_mode()" checked>
   </li>
   <div class="bike">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="-80 0 650 400" preserveAspectRatio="xMinYMin meet">
     <rect/>
     <g>
       <g id="man-bike">
         <path id="Vector_2" opacity="0.1" d="M201.091 276.806L179.893 255.76L173.269 262.513L194.467 283.559L201.091 276.806Z" fill="black" />
         <path id="Vector_3" opacity="0.05" d="M269.455 177.344C269.455 177.344 326.601 189.531 325.92 197.189C325.238 204.847 268.194 187.328 268.194 187.328C268.194 187.328 264.731 181.519 269.455 177.344Z" fill="black" />
         <path id="Vector_4" opacity="0.1" d="M259.93 224.494C251.988 220.634 232.6 220.22 232.6 220.22L232.392 218.277L258.907 216.225L260.396 221.718C260.396 221.718 260.729 222.792 259.93 224.494Z" fill="black" />
         <path id="Vector_5" opacity="0.1" d="M202.149 253.613C201.27 254.287 200.833 254.677 200.833 254.677C200.833 254.677 184.95 260.17 184.95 245.688C184.95 245.688 185.719 245.278 186.935 244.594C188.164 246.607 189.885 248.269 191.934 249.423C193.983 250.576 196.292 251.181 198.639 251.181H200.322L202.149 253.613Z" fill="black" />
         <path id="Vector_6" d="M184.95 245.688C184.95 245.688 197.254 239.156 202.01 234.951C204.872 232.432 207.95 230.171 211.207 228.195L226.644 218.742L258.907 216.245L260.396 221.738C260.396 221.738 262.878 229.728 238.06 236.719C213.242 243.71 200.833 254.697 200.833 254.697C200.833 254.697 184.95 260.17 184.95 245.688Z" fill="#DB8B8B" />
         <path id="Vector_7" d="M185.198 242.442L172.044 251.181L210.562 283.64C210.562 283.64 216.22 280.145 213.242 276.15C213.242 276.15 203.315 267.66 202.819 255.675L199.841 251.68H198.158C195.313 251.681 192.537 250.792 190.216 249.137C187.894 247.482 186.141 245.143 185.198 242.442V242.442Z" fill="#E5E5E5" />
         <path id="Vector_8" d="M232.6 219.221C232.6 219.221 255.929 219.72 261.886 224.714L258.907 164.29H226.644L232.6 219.221Z" fill="#6A6567" />
         <path id="Vector_9" d="M201.091 276.806L179.893 255.76L173.269 262.513L194.467 283.559L201.091 276.806Z" fill="#1E1F21" />
         <path id="Vector_10" opacity="0.05" d="M232.6 218.971C232.6 218.971 255.929 219.471 261.886 224.464L258.907 164.04H226.644L232.6 218.971Z" fill="#535461" />
         <path id="Vector_11" opacity="0.05" d="M259.93 224.494C258.55 227.436 253.79 232.27 238.06 236.699C217.903 242.377 205.931 250.682 202.149 253.613C201.27 254.287 200.833 254.677 200.833 254.677C200.833 254.677 184.95 260.17 184.95 245.688C184.95 245.688 185.719 245.278 186.935 244.594C190.623 242.562 198.431 238.102 201.995 234.931C204.857 232.411 207.934 230.15 211.192 228.175L226.629 218.722L232.377 218.277L258.892 216.225L260.382 221.718C260.382 221.718 260.729 222.792 259.93 224.494Z" fill="black" />
         <path id="Vector_12" d="M251.343 182.247C251.343 182.247 309.74 180.25 310.931 187.845C312.122 195.441 252.534 192.24 252.534 192.24C252.534 192.24 247.769 187.441 251.343 182.247Z" fill="#1E1F21" />
         <path id="Vector_13" opacity="0.1" d="M204.07 212.619V219.576C200.635 220.025 197.12 220.31 193.74 220.419V212.619H204.07Z" fill="black" />
         <path id="Vector_14" d="M203.295 205.134C201.846 205.021 200.404 204.826 198.977 204.549C193.378 203.471 179.261 201.208 175.464 205.049C170.699 209.843 172.288 218.237 184.999 219.436C197.711 220.634 219.561 217.438 223.934 212.639C223.934 212.619 216.027 206.117 203.295 205.134Z" fill="#1E1F21" />
         <path id="Vector_15" d="M233.469 290.961L311.73 213.423L316.098 219.815L241.411 298.152L233.469 290.961Z" fill="#71575D" />
         <path id="Vector_16" d="M346.689 303.75L341.129 306.946L302.344 197.918L300.607 193.039L309.745 187.84L312.033 195.021L346.689 303.75Z" fill="#71575D" />
         <path id="Vector_17" d="M204.07 212.624H193.74V302.951H204.07V212.624Z" fill="#71575D" />
         <path id="Vector_18" d="M201.29 237.403L309.745 203.431L313.318 211.825L202.084 250.192L201.29 237.403Z" fill="#1E1F21" />
         <path id="Vector_19" opacity="0.1" d="M178.363 270.347L167.761 280.11C165.883 277.685 163.761 275.462 161.427 273.478L171.325 263.076C173.873 265.293 176.228 267.726 178.363 270.347V270.347Z" fill="black" />
         <path id="Vector_20" d="M252.931 203.431L307.357 184.644C307.357 184.644 316.892 185.843 313.313 193.838L258.495 210.222C258.495 210.222 250.157 211.021 252.931 203.431Z" fill="#1E1F21" />
         <path id="Vector_21" opacity="0.1" d="M231.479 313.743C238.499 313.743 244.19 308.017 244.19 300.954C244.19 293.891 238.499 288.165 231.479 288.165C224.458 288.165 218.767 293.891 218.767 300.954C218.767 308.017 224.458 313.743 231.479 313.743Z" fill="black" />
         <path id="Vector_22" opacity="0.1" d="M333.411 264.594C330.931 265.239 328.513 266.103 326.184 267.176L321.439 253.838C323.929 252.746 326.494 251.833 329.113 251.106L333.411 264.594Z" fill="black" />
         <path id="Vector_23" opacity="0.1" d="M191.556 307.546C191.556 310.609 191.32 313.667 190.851 316.694C186.086 316.35 181.162 315.85 176.338 315.351C177.41 309.413 177.276 303.318 175.946 297.433C180.646 296.434 185.446 295.481 190.132 294.617C191.081 298.86 191.559 303.196 191.556 307.546V307.546Z" fill="black" />
         <path id="Vector_24" d="M228.884 299.993L228.88 299.996C227.387 301.119 227.082 303.247 228.198 304.749L238.287 318.322C239.403 319.824 241.519 320.131 243.011 319.008L243.015 319.005C244.508 317.882 244.813 315.754 243.697 314.252L233.608 300.679C232.492 299.177 230.376 298.87 228.884 299.993Z" fill="#7F879C" />
         <path id="Vector_25" d="M289.682 123.341L288.5 138.377C288.364 140.282 288.389 142.194 288.575 144.095C288.729 145.778 288.575 148.724 286.937 153.218C284.834 158.96 283.747 165.027 283.725 171.146V188.26L272.309 186.262C272.309 186.262 272.805 162.292 270.82 158.297C268.835 154.302 272.309 118.846 272.309 118.846L289.682 123.341Z" fill="#DB8B8B" />
         <path id="Vector_26" d="M233.107 238.197L228.813 262.767C228.272 266.047 227.441 269.272 226.331 272.404C223.815 279.326 225.423 289.029 226.644 294.322C227.185 296.659 227.637 298.137 227.637 298.137L214.731 305.129L210.76 302.132V300.135L210.264 255.69C207.286 248.699 208.279 238.212 210.264 234.217C210.829 232.905 211.226 231.525 211.445 230.112C212.438 224.759 212.746 217.238 212.746 217.238C212.746 217.238 220.688 203.755 230.118 212.744C233.593 216.055 234.913 220.384 235.191 224.529C235.678 231.625 233.107 238.197 233.107 238.197Z" fill="#DB8B8B" />
         <path id="Vector_27" d="M134.549 302.951L196.917 237.403L198.907 252.589L137.726 308.944L134.549 302.951Z" fill="#71575D" />
         <path id="Vector_28" opacity="0.1" d="M235.191 224.514C228.307 228.629 216.33 229.793 211.445 230.097C212.438 224.744 212.746 217.223 212.746 217.223C212.746 217.223 220.688 203.740 230.118 212.729C233.593 216.04 234.913 220.37 235.191 224.514Z" fill="black" />
         <path id="Vector_29" opacity="0.05" d="M289.096 130.792L288.5 138.377C288.366 140.28 288.393 142.191 288.58 144.09C288.734 145.773 288.58 148.719 286.942 153.218C284.839 158.96 283.752 165.027 283.73 171.146V188.26L272.314 186.262C272.314 186.262 272.81 162.292 270.825 158.297C269.42 155.466 270.75 136.854 271.649 126.232C272.021 121.863 272.314 118.846 272.314 118.846L289.687 123.341L289.096 130.792Z" fill="black" />
         <path id="Vector_30" opacity="0.1" d="M254.177 156.499C253.944 158.831 253.944 160.295 253.944 160.295C253.944 160.295 242.527 169.783 223.169 155.301C203.811 140.819 186.439 144.814 186.439 144.814C186.439 144.814 186.642 143.655 187.054 141.818C188.424 138.996 189.913 137.823 189.913 137.823L251.958 149.808L254.177 156.499Z" fill="black" />
         <path id="Vector_31" opacity="0.05" d="M256.058 145.029C254.779 149.51 254.069 154.136 253.944 158.796C253.944 158.796 250.926 161.293 245.367 161.793C245.21 161.475 245.09 161.14 245.009 160.794C244.017 156.3 236.571 148.31 236.571 148.31C231.608 143.815 230.615 135.825 230.615 135.825L222.425 111.605L219.695 109.358C219.695 109.358 231.111 100.37 241.038 107.86C250.966 115.351 247.987 131.331 247.987 131.331L249.973 136.824C252.033 138.572 254.127 141.653 256.058 145.029Z" fill="black" />
         <path id="Vector_32" opacity="0.1" d="M312.033 195.021L302.344 197.918L300.607 193.039L309.745 187.84L312.033 195.021Z" fill="black" />
         <path id="Vector_33" d="M296.373 103.84C295.077 114.003 294.645 126.811 294.645 126.811C283.229 135.8 274.295 124.315 274.295 124.315C263.514 127.226 258.446 136.719 256.058 145.004C254.779 149.485 254.069 154.111 253.944 158.772C253.944 158.772 250.926 161.268 245.367 161.768C240.11 162.212 232.575 160.834 223.169 153.778C203.811 139.296 186.439 143.291 186.439 143.291C186.439 143.291 189.913 123.316 197.855 117.323C205.797 111.331 211.753 103.84 221.68 80.8689C231.608 57.8976 251.958 63.3908 251.958 63.3908C251.958 63.3908 252.951 58.8964 271.316 63.3908C275.79 64.5703 279.93 66.777 283.413 69.8377C293.236 78.1473 298.001 91.0362 296.373 103.84Z" fill="black" />
         <path id="Vector_34" d="M251.958 212.23C246.68 215.058 241.692 218.403 237.068 222.217C229.126 228.709 209.271 229.208 209.271 229.208V221.718C209.768 212.729 201.33 202.742 189.913 174.777C182.622 156.919 184.642 146.811 187.054 141.818C188.424 138.996 189.913 137.823 189.913 137.823L251.958 149.808L254.177 156.499L258.907 170.782C258.907 170.782 241.535 171.78 238.557 173.278C235.578 174.777 237.564 188.26 237.564 188.26C234.586 202.242 251.958 212.23 251.958 212.23Z" fill="#6A6567" />
         <path id="Vector_35" d="M232.278 313.743C239.298 313.743 244.989 308.017 244.989 300.954C244.989 293.891 239.298 288.165 232.278 288.165C225.257 288.165 219.566 293.891 219.566 300.954C219.566 308.017 225.257 313.743 232.278 313.743Z" fill="#1E1F21" />
         <path id="Vector_36" d="M277.953 74.6517C277.928 75.3159 277.873 76.0549 277.784 76.8789C276.791 85.8677 275.798 84.8689 264.879 86.8664C258.088 88.1099 254.559 82.402 252.862 77.9076C252.247 76.2795 251.784 74.5978 251.477 72.8839L275.302 68.8889C275.302 68.8889 278.156 68.0849 277.953 74.6517Z" fill="#DB8B8B" />
         <path id="Vector_37" d="M281.244 63.4157C281.244 68.0512 279.413 72.4969 276.155 75.7747C272.897 79.0524 268.478 80.8939 263.871 80.8939C259.263 80.8939 254.845 79.0524 251.587 75.7747C248.329 72.4969 246.498 68.0512 246.498 63.4157C246.498 63.1261 246.498 62.8365 246.498 62.5468C246.613 57.9113 248.553 53.5115 251.892 50.3152C255.231 47.1188 259.695 45.3879 264.303 45.5031C268.91 45.6184 273.284 47.5703 276.461 50.9296C279.638 54.2888 281.358 58.7802 281.244 63.4157V63.4157Z" fill="#DB8B8B" />
         <path id="Vector_38" opacity="0.1" d="M289.682 123.341L289.096 130.792C280.459 133.288 274.295 125.338 274.295 125.338C273.394 125.581 272.508 125.88 271.644 126.232C272.016 121.863 272.309 118.846 272.309 118.846L289.682 123.341Z" fill="black" />
         <path id="Vector_39" opacity="0.1" d="M242.527 87.8851L249.477 115.351C249.477 115.351 228.133 118.846 223.666 115.351C219.199 111.855 210.76 110.856 210.76 110.856C210.76 110.856 219.695 84.8889 224.659 81.8926C229.622 78.8964 242.527 87.8851 242.527 87.8851Z" fill="black" />
         <path id="Vector_40" opacity="0.1" d="M227.637 298.122L214.731 305.114L210.76 302.117V300.12C215.22 299.801 219.552 298.486 223.442 296.27C224.634 295.59 225.755 294.921 226.654 294.332C227.175 296.644 227.637 298.122 227.637 298.122Z" fill="black" />
         <path id="Vector_41" opacity="0.05" d="M200.089 117.099C200.089 117.099 212.994 120.594 216.965 129.583C220.936 138.572 231.677 140.215 231.677 140.215" fill="black" />
         <path id="Vector_42" d="M221.184 108.859L232.104 135.326C232.104 135.326 233.097 143.316 238.06 147.81C238.06 147.81 245.506 155.8 246.498 160.295C247.491 164.789 261.389 176.774 261.389 176.774C261.389 176.774 274.295 188.759 275.287 193.253C275.287 193.253 287.2 196.749 285.711 203.74C285.711 203.74 294.645 194.752 285.711 186.262C276.776 177.773 264.864 160.295 264.864 160.295C264.864 160.295 257.915 141.818 251.462 136.325L249.477 130.831C249.477 130.831 252.455 114.851 242.527 107.361C232.6 99.8702 221.184 108.859 221.184 108.859Z" fill="#DB8B8B" />
         <path id="Vector_43" d="M248.732 314.851H218.95V324.34H248.732V314.851Z" fill="#1E1F21" />
         <path id="Vector_44" d="M242.527 86.8864L249.477 114.352C249.477 114.352 228.133 117.848 223.666 114.352C219.199 110.856 210.76 109.858 210.76 109.858C210.76 109.858 219.695 83.8901 224.659 80.8939C229.622 77.8976 242.527 86.8864 242.527 86.8864Z" fill="black" />
         <path id="Vector_45" d="M223.423 297.243C226.088 295.745 228.426 294.247 228.629 293.628C228.629 293.628 235.355 300.769 241.346 302.986C243.361 303.735 245.289 304.699 247.099 305.863C249.472 307.361 252.857 309.124 255.929 309.124C255.929 309.124 262.878 315.116 249.477 316.115C236.075 317.114 204.804 313.618 204.804 313.618L206.79 301.134C212.591 301.476 218.366 300.125 223.423 297.243Z" fill="#E5E5E5" />
         <path id="Vector_46" d="M137.329 307.361C137.329 307.361 220.757 285.388 227.508 293.773C234.258 302.157 241.411 313.353 220.375 317.348C199.339 321.343 135.755 310.552 135.755 310.552L137.329 307.361Z" fill="#71575D" />
         <path id="Vector_47" opacity="0.1" d="M248.732 314.851H218.95V324.34H248.732V314.851Z" fill="#1E1F21" />
       </g>
       <g id="left-wheel">
         <path id="Vector_48" d="M135.686 358.047L132.574 309.139L132.509 309.034L129.372 310.132L114.938 352.504L91.9815 336.13L128.548 309.458L128.583 309.353L128.792 309.278L131.149 307.556L92.8104 285.928L83.4193 296.315L84.9084 306.052L128.995 306.861V307.86L84.0844 307.051L82.3868 295.995L95.2426 281.783L114.477 259.211L114.819 260.145L118.889 255.65L134.008 258.377V257.773L135.001 257.803V258.557L157.516 262.612L136.525 304.864L133.462 307.096V307.346V307.625L182.006 290.607L176.244 336.155L135.046 309.753L133.596 308.934L157.888 348.325L135.686 358.047ZM133.701 310.936L136.604 356.569L156.483 347.89L133.701 310.936ZM93.7039 336.12L114.447 350.916L128.017 311.096L93.7039 336.12ZM134.564 308.325L135.602 308.909L175.484 334.477L180.845 292.095L134.564 308.325ZM131.04 304.729L132.286 306.752L132.504 306.592L133.993 259.386L119.232 256.729L115.181 261.223L131.04 304.729ZM93.6046 285.223L130.752 306.197L130.107 305.134L114.432 262.052L95.9722 282.462L93.6046 285.223ZM135.001 259.561L133.512 305.863L135.755 304.225L156.062 263.366L135.001 259.561Z" fill="#535461" />
         <path id="Vector_49" d="M132.956 313.743C136.468 313.743 139.314 310.879 139.314 307.346C139.314 303.813 136.468 300.949 132.956 300.949C129.444 300.949 126.598 303.813 126.598 307.346C126.598 310.879 129.444 313.743 132.956 313.743Z" fill="#1E1F21" />
         <path id="Vector_50" d="M190.132 294.607C188.141 285.708 184.111 277.401 178.363 270.347C176.229 267.726 173.876 265.293 171.33 263.076C161.538 254.571 149.217 249.578 136.3 248.88C123.383 248.181 110.601 251.818 99.9599 259.218C89.3191 266.619 81.4219 277.365 77.5077 289.769C73.5935 302.173 73.8838 315.534 78.3331 327.754C82.7824 339.975 91.1389 350.363 102.091 357.288C113.043 364.214 125.971 367.285 138.845 366.02C151.72 364.754 163.812 359.224 173.225 350.296C182.637 341.369 188.837 329.55 190.851 316.694C191.32 313.667 191.556 310.609 191.556 307.546C191.56 303.193 191.082 298.853 190.132 294.607ZM132.956 351.71C123.906 351.701 115.079 348.887 107.675 343.653C100.27 338.418 94.648 331.016 91.5724 322.453C88.4968 313.89 88.1171 304.582 90.4849 295.795C92.8527 287.007 97.8531 279.167 104.806 273.339C111.759 267.512 120.328 263.98 129.346 263.224C138.365 262.468 147.396 264.526 155.211 269.116C163.027 273.706 169.247 280.606 173.027 288.879C176.807 297.151 177.963 306.394 176.338 315.351C174.476 325.56 169.116 334.789 161.19 341.432C153.263 348.075 143.273 351.713 132.956 351.71Z" fill="#1E1F21" />
       </g>
       <g id="right-wheel">
         <path id="Vector_51" d="M347.23 358.247L344.122 309.358L344.058 309.253L340.921 310.352L326.482 352.704L303.525 336.325L340.102 309.653L340.137 309.548L340.345 309.473L342.703 307.75L304.364 286.122L294.968 296.509L296.457 306.247L340.534 307.036V308.035L295.623 307.226L293.935 296.185L306.786 281.978L326.005 259.421L326.348 260.355L330.418 255.86L345.577 258.592V257.988L346.569 258.017V258.772L369.084 262.826L348.073 305.099L345.011 307.331V307.581V307.86L393.56 290.841L387.797 336.389L346.599 309.987L345.15 309.169L369.442 348.564L347.23 358.247ZM345.244 311.136L348.148 356.769L368.027 348.09L345.244 311.136ZM305.252 336.325L325.995 351.121L339.566 311.301L305.252 336.325ZM346.113 308.529L347.15 309.114L387.033 334.682L392.393 292.3L346.113 308.529ZM342.589 304.934L343.835 306.956L344.053 306.796L345.542 259.591L330.78 256.924L326.73 261.418L342.589 304.934ZM305.168 285.433L342.316 306.407L341.67 305.343L325.995 262.262L307.531 282.677L305.168 285.433ZM346.55 259.77L345.061 306.057L347.304 304.419L367.61 263.561L346.55 259.77Z" fill="#535461" />
         <path id="Vector_52" d="M344.505 313.943C348.016 313.943 350.863 311.079 350.863 307.546C350.863 304.013 348.016 301.149 344.505 301.149C340.993 301.149 338.146 304.013 338.146 307.546C338.146 311.079 340.993 313.943 344.505 313.943Z" fill="#1E1F21" />
         <path id="Vector_53" d="M344.703 248.994C339.435 248.988 334.191 249.7 329.113 251.111C326.494 251.838 323.929 252.751 321.439 253.843C308.171 259.629 297.508 270.161 291.512 283.4C285.516 296.639 284.614 311.645 288.979 325.515C293.345 339.385 302.668 351.133 315.146 358.486C327.624 365.84 342.369 368.276 356.529 365.324C370.689 362.372 383.257 354.242 391.803 342.505C400.349 330.769 404.265 316.261 402.793 301.788C401.321 287.315 394.566 273.905 383.835 264.153C373.104 254.401 359.159 249 344.698 248.994H344.703ZM344.505 351.91C334.438 351.906 324.676 348.438 316.839 342.081C309.002 335.724 303.562 326.862 301.423 316.965C299.284 307.069 300.574 296.734 305.079 287.677C309.584 278.62 317.033 271.386 326.189 267.176C328.518 266.103 330.936 265.24 333.416 264.594C339.478 263.011 345.805 262.745 351.977 263.814C358.148 264.883 364.023 267.262 369.21 270.792C374.397 274.323 378.777 278.925 382.058 284.291C385.34 289.657 387.448 295.665 388.242 301.915C389.036 308.165 388.498 314.513 386.664 320.537C384.829 326.561 381.741 332.123 377.603 336.853C373.466 341.583 368.375 345.372 362.669 347.968C356.962 350.564 350.772 351.908 344.51 351.91H344.505Z" fill="#1E1F21" />
       </g>
       <path id="hat" d="M233.931 52.6043C234.988 55.9401 240.066 56.045 242.671 58.5019C244.026 59.7803 244.657 61.6679 246.146 62.8065C248.216 64.3945 251.204 64.045 253.839 63.6654C259.146 62.9064 264.844 62.4519 269.629 64.7541C271.326 65.568 272.85 66.7066 274.622 67.3708C276.394 68.035 278.593 68.1149 280.032 66.9363C281.184 65.9925 281.606 64.4395 282.648 63.4008C283.457 62.5818 284.584 62.1224 285.507 61.4033C287.532 59.8652 288.406 57.3583 288.982 54.9613C290.173 50.0275 290.516 44.7091 288.485 40.03C286.455 35.3508 281.571 31.5406 276.24 31.7853C274.607 31.8602 273.014 32.2846 271.386 32.4644C267.142 32.8989 262.948 31.4657 258.689 31.221C257.454 31.0697 256.2 31.2417 255.051 31.7204C254.184 32.2052 253.436 32.8792 252.862 33.6929C250.912 36.2624 249.577 39.2494 248.96 42.422C248.464 44.814 248.439 46.9813 245.525 47.3508C242.215 47.7903 231.692 45.5481 233.931 52.6043Z" fill="#472727" />
     </g>
     <defs>
       <linearGradient id="paint0_linear" x1="432.641" y1="56.6686" x2="44.1018" y2="338.225" gradientUnits="userSpaceOnUse">
         <stop offset="0.0001" stop-color="#490DF3" />
         <stop offset="1" stop-color="#3B49C6" stop-opacity="0.05" />
       </linearGradient>
     </defs>
   </svg>
 </div>
  </ul>
</div>
</nav>`);

// Footer

let footer = $(`
<footer class="footer sticky-bottom"  style="background-color:#2b2a2a;">


<div class="p-4">    
  <div class="container">
        
        <div class="skills-container">
            <!-- Primera fila -->
            <div class="cards-slider">
                <!-- Primera set de cards -->
                <div class="skill-card-slider"><h3>React</h3></div>
                <div class="skill-card-slider"><h3>JavaScript</h3></div>
                <div class="skill-card-slider"><h3>TypeScript</h3></div>
                <div class="skill-card-slider"><h3>NodeJS</h3></div>
                <div class="skill-card-slider"><h3>Angular</h3></div>
                <div class="skill-card-slider"><h3>AWS</h3></div>
                <div class="skill-card-slider"><h3>NextJS</h3></div>
                <div class="skill-card-slider"><h3>Express</h3></div>
                <div class="skill-card-slider"><h3>Firebase</h3></div>
                <div class="skill-card-slider"><h3>Redux</h3></div>
                <div class="skill-card-slider"><h3>MySQL</h3></div>
                <div class="skill-card-slider"><h3>Bootstrap</h3></div>
                <div class="skill-card-slider"><h3>TailwindCSS</h3></div>
                <div class="skill-card-slider"><h3>Python</h3></div>
                <div class="skill-card-slider"><h3>Docker</h3></div>
                
                <!-- Duplicar las cards para efecto infinito -->
                <div class="skill-card-slider"><h3>React</h3></div>
                <div class="skill-card-slider"><h3>JavaScript</h3></div>
                <div class="skill-card-slider"><h3>TypeScript</h3></div>
                <div class="skill-card-slider"><h3>NodeJS</h3></div>
                <div class="skill-card-slider"><h3>Angular</h3></div>
                <div class="skill-card-slider"><h3>AWS</h3></div>
                <div class="skill-card-slider"><h3>NextJS</h3></div>
                <div class="skill-card-slider"><h3>Express</h3></div>
                <div class="skill-card-slider"><h3>Firebase</h3></div>
                <div class="skill-card-slider"><h3>Redux</h3></div>
                <div class="skill-card-slider"><h3>MySQL</h3></div>
                <div class="skill-card-slider"><h3>Bootstrap</h3></div>
                <div class="skill-card-slider"><h3>TailwindCSS</h3></div>
                <div class="skill-card-slider"><h3>Python</h3></div>
                <div class="skill-card-slider"><h3>Docker</h3></div>
            </div>
            
            <!-- Segunda fila -->
            <div class="cards-slider row-2">
                <!-- Primera set de cards -->
                <div class="skill-card-slider"><h3>Git</h3></div>
                <div class="skill-card-slider"><h3>Sass</h3></div>
                <div class="skill-card-slider"><h3>Vue.js</h3></div>
                <div class="skill-card-slider"><h3>Jira</h3></div>
                <div class="skill-card-slider"><h3>Trello</h3></div>
                <div class="skill-card-slider"><h3>Monday</h3></div>
                <div class="skill-card-slider"><h3>Material Design</h3></div>
                <div class="skill-card-slider"><h3>HTML</h3></div>
                <div class="skill-card-slider"><h3>CSS</h3></div>
                <div class="skill-card-slider"><h3>CI/CD</h3></div>
                <div class="skill-card-slider"><h3>REST API</h3></div>
                <div class="skill-card-slider"><h3>GraphQL</h3></div>
                <div class="skill-card-slider"><h3>MongoDB</h3></div>
                <div class="skill-card-slider"><h3>Kubernetes</h3></div>
                <div class="skill-card-slider"><h3>Vite</h3></div>
                <div class="skill-card-slider"><h3>Flask</h3></div>
                <div class="skill-card-slider"><h3>.NET</h3></div>
                
                <!-- Duplicar las cards para efecto infinito -->
                <div class="skill-card-slider"><h3>Git</h3></div>
                <div class="skill-card-slider"><h3>Sass</h3></div>
                <div class="skill-card-slider"><h3>Vue.js</h3></div>
                <div class="skill-card-slider"><h3>Jira</h3></div>
                <div class="skill-card-slider"><h3>Trello</h3></div>
                <div class="skill-card-slider"><h3>Monday</h3></div>
                <div class="skill-card-slider"><h3>Material Design</h3></div>
                <div class="skill-card-slider"><h3>HTML</h3></div>
                <div class="skill-card-slider"><h3>CSS</h3></div>
                <div class="skill-card-slider"><h3>CI/CD</h3></div>
                <div class="skill-card-slider"><h3>REST API</h3></div>
                <div class="skill-card-slider"><h3>GraphQL</h3></div>
                <div class="skill-card-slider"><h3>MongoDB</h3></div>
                <div class="skill-card-slider"><h3>Kubernetes</h3></div>
                <div class="skill-card-slider"><h3>Vite</h3></div>
                <div class="skill-card-slider"><h3>Flask</h3></div>
                <div class="skill-card-slider"><h3>.NET</h3></div>
            </div>
        </div>
    </div>
</div>

  <div class="container">
    <div class="row">
      
      <!-- 1) Columna IZQUIERDA: imagen ANIMADA -->
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0
                  d-flex justify-content-center align-items-center">
        <style>
          @keyframes slideDown {
            0%   { opacity: 0; transform: translateY(-30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes floating {
            0%   { transform: translateY(0); }
            50%  { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          .img-animated {
            opacity: 0;
            animation:
              slideDown 1s cubic-bezier(.36,-.01,.5,1.38) forwards 0.2s,
              floating 1.5s linear infinite 1.2s;
          }
        </style>

        <img
          src="assets/images/1.png"
          alt=""
          class="img-fluid img-animated"
          style="max-height: 380px"
        />
      </div>

      <!-- 2) Columna DERECHA: formulario CENTRADO y con ANCHO FIJO -->
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0
                  d-flex justify-content-center align-items-center">
        <div class="form-comtainer" style="max-width: 400px; width: 100%;">
          <div class="form-style-6">
            <div class="form-header">
              <h6 class="display">Get in Touch</h6>
            </div>
            <form
              name="form1"
              action="https://formcarry.com/s/kZyj9_E7RBO"
              method="POST"
              accept-charset="UTF-8"
            >
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <textarea
                id="textArea"
                name="message"
                placeholder="Type your Message"
                required
              ></textarea>

              <div id="main">
                <button id="lnch" type="button" value="Send">Send</button>
                <div id="lnch_btn">
                  <i class="fas fa-space-shuttle"></i>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div><!-- /.row -->
  </div><!-- /.container -->
</div><!-- /.p-4 -->


    
<div class="rounded-social-buttons tag">
    <div class="rounded-social-buttons tag">
   
    <a class="social-button linkedin" href="https://www.linkedin.com/in/lizethacostag/" target="_blank" >
    <!-- svg code for linkedin icon -->
      <svg class="linkedin-icon-footer" xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 24 24" fill="#0e76a8"
        stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>

    <a class="social-button github" href="https://github.com/lizethacostag" target="_blank">
    <!-- SVG code for Github icon -->
    <svg class="github-icon-footer" width="45px" height="45px" viewBox="0 0 300 300">
        <!-- body -->
        <path id="body" d="M112.5,234.4v43.1c24.5,7.5,50.5,7.5,75,0V225c-0.4-11.1-4.9-21.6-12.7-29.6c30-3.4,59.5-23.5,59.5-64.1
                                    c0.9-13.9-3.3-27.7-11.8-38.7c4.1-11.6,3.7-24.4-1.3-35.7c0,0-11.2-3.7-37.5,13.8c-22.1-6.1-45.3-6.1-67.4,0
                                    C90.6,53.3,78.9,56.8,78.9,56.8c-5,11.3-5.4,24.1-1.3,35.7c-8.5,11.1-12.7,24.8-11.9,38.7c0.2,33.8,26.4,61.8,60.2,64.1
                                    c-5,4.7-8.1,11.1-8.6,18" />
        <!-- arm                             -->
        <path id="arm" d="M125.2,213.4c-13.9,7.8-31.5,2.8-39.3-11.2c-4.3-7.7-12-12.8-20.7-13.8c-11.2,0-4.6,6.4,0,9.4
                                    c6,5.1,10.8,11.5,13.8,18.8c2.9,7.4,7.7,24.1,41.5,17.8" />
    </svg>
    </a>
    

  <a class="social-button cv"
   href="CV.pdf"
   target="_blank"
   title="Ver mi CV">
   <i class="fas fa-file-pdf pdf-icon-footer"></i>
</a>



    
    </div>
    </div>
</footer>
`);

//"Scroll to top" button
let upArrow = $(`
  <button id="btnScrollToTop" onclick="scrollToTop()"><i class="fas fa-2x fa-angle-up"></i></button>
  <link rel="stylesheet" type="text/css" href="./css/style.css" />
  })
`);

$(document).ready(function () {
  // updating the color of the swiper bullets (initial update of color)
  updateColorOfSwiperBullets(localStorage.getItem("lightMode"));

  //function for the "Scroll To Top" button to detect the footer
  $(window).scroll(function () {
    //The button will be hidden until we scroll more than the window's height
    if ($(window).scrollTop() < $(window).height()) {
      $("#btnScrollToTop").css("visibility", "hidden");
    } else {
      $("#btnScrollToTop").css("visibility", "visible");
      //The button will change it's color when it hits the footer
      if (
        $(window).scrollTop() + $(window).height() >
        $(document).height() - 838
      ) {
        // 838 should be changed if footer's height is changed so that the button changes it's color exactly when it hits the footer (preferably 14 less than the computer height of the footer)
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      } else {
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      }
    }
  });
});

//function to scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// Window Loads
$(function () {
  let bodyElement = $(`body`);
  bodyElement.prepend(header);
  bodyElement.append(footer);
  bodyElement.append(upArrow);
  $("#btnScrollToTop").css("visibility", "hidden");

  //toggler hamburger functions
  const menuBtn = document.querySelector(".navbar-toggler");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });
});

// function for toggling hamburger is-active class

$(function () {
  $("#js-hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });
});

// Navbar current page highlight

let loader = document.querySelector(".loader-container");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}
$(function () {
  $("a.nav-link").each(function () {
    if ($(this).prop("href") == window.location.href) {
      $(this).addClass("current-link");
    }
  });
});

//function to remove underline on hover

$(document).ready(function () {
  $("a.nav-link").hover(
    function () {
      $(this).removeClass("current-link");
    },
    function () {
      if ($(this).prop("href") == window.location.href) {
        $(this).addClass("current-link");
      }
    }
  );
});

//consistent light mode for page change
if (localStorage.getItem("lightMode") == "light") {
  var app = document.getElementsByTagName("HTML")[0];
  app.setAttribute("light-mode", "light");

  //to add dark theme to nav bar after its been loaded
  window.addEventListener("load", function () {
    var nav = document.getElementById("navbar");
    nav.classList.remove("dark-theme");
    document.getElementById("dark_toggler").checked = false;
  });

  var sc = document.getElementsByClassName("socialicon");
  for (var i = 0; i < sc.length; i++) {
    sc[i].classList.remove("dsc");
  }
} else {
  localStorage.setItem("lightMode", "dark");
}

function toggle_light_mode() {
  console.log(localStorage.getItem("lightMode"));
  var app = document.getElementsByTagName("HTML")[0];
  var nav = document.getElementById("navbar");
  if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
    nav.classList.remove("dark-theme");
    var sc = document.getElementsByClassName("socialicon");
    for (var i = 0; i < sc.length; i++) {
      sc[i].classList.remove("dsc");
    }
  } else {
    nav.classList.add("dark-theme");
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
    var sc = document.getElementsByClassName("socialicon");
    for (var i = 0; i < sc.length; i++) {
      sc[i].classList.add("dsc");
    }
  }

  // updating the swiper bullets
  updateColorOfSwiperBullets(localStorage.getItem("lightMode"));
  
  updateParticleTheme();
}

// function to update swiper bullets
function updateColorOfSwiperBullets(lightMode) {
  document.querySelectorAll(".swiper-pagination-bullet").forEach((bullet) => {
    if (lightMode == "light") {
      bullet.style.backgroundColor = "blue";
    } else {
      bullet.style.backgroundColor = "white";
    }
  });
}

window.addEventListener("storage", function () {
  if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
  } else {
    app.setAttribute("light-mode", "light");
  }
});

// Function to remove scroll bar during preload
$(window).on("load", function () {
  setTimeout(function () {
    $(".no-scroll-preload").css("overflow", "visible");
  }, 1000);
  $(".loader-container").fadeOut(2500);
});

//send button animation


$(function submitAnimation() {
  const name = document.querySelector("#name")
  const emailAdress = document.querySelector("#email")
  const text = document.querySelector("#textArea")
  const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  $("#lnch").on("click", function () {

    // Check if the name field is empty or contains a number
    if (name.value == "" || (/\d/.test(name.value))) {
      swal("Error !","Please enter a valid name !","error");
      return;
    }
    // Check if the email field is empty or email is not valid ex: test@@email.com
    else if (emailAdress.value == "" || !(emailPattern.test(emailAdress.value))) {
      swal("Error !","Please enter a valid email !","error");
      return;
    }
    // Check if the message field is empty
    else if (text.value == "") {
      swal("Error !","Please enter a valid message !","error");
      return;
    }
    else {

      setTimeout(function () {
        $("#lnch").addClass("launching").text("Sending");
        $("#lnch_btn").addClass("launching");
      }, 0);
      setTimeout(function () {
        $("#lnch").addClass("launched").text("SENT");
        $("#lnch_btn").addClass("launched");
      }, 1500);
      // Wait for 2.2 seconds so that the send button animation can be fully played before submitting the form
      setTimeout(() => {
        document.querySelector('form').submit();
      }, 2200);
    }
  });
});


$(function(){
    console.log('Skills animation loaded');
});