interface ObjectsProps {
  handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
}
function Objects({ handleObjectClick, className }: ObjectsProps) {
  return (
    <g id="Objects">
      <path
        id="Adidas"
        className={`${className} object`}
        d="M558.987 911.04l116.848.003-1.024 114.297-116.619.503.795-114.803z"
        onClick={handleObjectClick}
      />
      <path
        id="Nike"
        className={`${className} object`}
        d="M430.273 910.876l120.253.333-1.054 114.46-119.468.792.269-115.585z"
        onClick={handleObjectClick}
      />
      <path
        id="McShark"
        className={`${className} object`}
        d="M303.324 910.876l120.253.333-2.042 115.252-118.443.698.232-116.283z"
        onClick={handleObjectClick}
      />
      <path
        id="Zara"
        className={`${className} object`}
        d="M172.029 911.04l122.833-.164-.243 116.283-122.709.667.119-116.786z"
        onClick={handleObjectClick}
      />
      <path
        id="Primark"
        className={`${className} object`}
        d="M684.126 911.04l123.189.003-1.08 114.297-122.947.503.838-114.803z"
        onClick={handleObjectClick}
      />
      <path
        id="Svarovski"
        className={`${className} object`}
        d="M815.849 911.04l124.416.003-1.091 114.297-124.171.503.846-114.803z"
        onClick={handleObjectClick}
      />
      <path
        id="H&M"
        className={`${className} object`}
        d="M948.369 911.04l125.087.003-1.097 112.234-124.841.494.851-112.731z"
        onClick={handleObjectClick}
      />
      <path
        id="MediaMarkt"
        className={`${className} object`}
        d="M492.345 554.188l478.43 1.477.269 286.743-478.664-.017-.035-288.203z"
        onClick={handleObjectClick}
      />
      <path
        id="Sephora"
        className={`${className} object`}
        d="M978.726 555.123l99.437 1.533-.111 286.383-99.487-.075.161-287.841z"
        onClick={handleObjectClick}
      />
      <path
        id="Levi's"
        className={`${className} object`}
        d="M384.429 554.004l98.751.437.026 89.317-98.782.047.005-89.801z"
        onClick={handleObjectClick}
      />
      <path
        id="Vans"
        className={`${className} object`}
        d="M384.371 652.277l98.752.081.078 87-98.883-.015.053-87.066z"
        onClick={handleObjectClick}
      />
      <path
        id="Starbucks"
        className={`${className} object`}
        d="M384.263 747.018l98.933.057-.159 95.586-98.747-.047-.027-95.596z"
        onClick={handleObjectClick}
      />
      <path
        id="KFC"
        className={`${className} object`}
        d="M696.664 238.508l171.452-.046.021 232.906-171.458-.113-.015-232.747z"
        onClick={handleObjectClick}
      />
      <path
        id="McDonald's"
        className={`${className} object`}
        d="M935.02 239.647l171.451-.046.022 232.493-171.625.071.151-232.518z"
        onClick={handleObjectClick}
      />
      <path
        id="Rolex"
        className={`${className} object`}
        d="M455.6 246.006l179.653-.037.12 104.876-179.822-.036.05-104.803z"
        onClick={handleObjectClick}
      />
      <path
        id="Louis Vuitton"
        className={`${className} object`}
        d="M455.473 359.466l179.713-.037.126 111.555-179.919-.293.08-111.225z"
        onClick={handleObjectClick}
      />
      <path
        id="Chanel"
        className={`${className} object`}
        d="M288.551 245.905l158.26-.05.1 104.876-158.41-.023.05-104.803z"
        onClick={handleObjectClick}
      />
      <path
        id="Gucci"
        className={`${className} object`}
        d="M288.483 359.374l158.26-.059.095 111.54-158.409-.018.054-111.463z"
        onClick={handleObjectClick}
      />
      <path
        id="7-Eleven"
        className={`${className} object`}
        d="M271.405 34.433l144.006-.114.19 146.272-144.281.014.085-146.172z"
        onClick={handleObjectClick}
      />
      <path
        id="Victoria's Secret"
        className={`${className} object`}
        d="M424.29 34.522l146.224-.113.063 146.316-146.362.01.075-146.213z"
        onClick={handleObjectClick}
      />
      <path
        id="Pandora"
        className={`${className} object`}
        d="M579.065 34.617l170.852-.098.088 146.316-171.013-.004.073-146.214z"
        onClick={handleObjectClick}
      />
      <path
        id="Foot Locker"
        className={`${className} object`}
        d="M758.677 34.72l155.194-.108.072 146.316-155.34.005.074-146.214z"
        onClick={handleObjectClick}
      />
      <path
        id="Pharmacy"
        className={`${className} object`}
        d="M922.523 34.818l174.226-.096.09 146.317-174.39-.006.074-146.215z"
        onClick={handleObjectClick}
      />
      <path
        id="GameStop"
        className={`${className} object`}
        d="M1105.14 34.92l155.263-.107.07 146.317-155.407.005.074-146.215z"
        onClick={handleObjectClick}
      />
      <path
        id="Claire's"
        className={`${className} object`}
        d="M1269.109 35.006l105.412-.136.02 146.317-105.51.034.078-146.215z"
        onClick={handleObjectClick}
      />
      <path
        id="Tobacco Shop"
        className={`${className} object`}
        d="M1244.815 412.508l179.773.266-.04 128.337-179.694-.064-.04-128.539z"
        onClick={handleObjectClick}
      />
      <path
        id="PetSmart"
        className={`${className} object`}
        d="M1244.728 549.605l98.037.282.177 183.25-98.255-4.044.041-179.488z"
        onClick={handleObjectClick}
      />
      <path
        id="Barbershop"
        className={`${className} object`}
        d="M1244.509 737.562l98.428 4.068-.193 189.675-98.283-.602.048-193.141z"
        onClick={handleObjectClick}
      />
      <path
        id="Mall Office"
        className={`${className} object`}
        d="M33.225 368.014l158.276-.11.083 265.887-158.45-.03.091-265.747z"
        onClick={handleObjectClick}
      />
      <path
        id="East Wing Toilet"
        className={`${className} object`}
        d="M1305.166 292.446l119.546.21-.043 111.717-119.492-.035-.011-111.892z"
        onClick={handleObjectClick}
      />
      <path
        id="North Wing Toilet"
        className={`${className} object`}
        d="M151.579 34.324l111.218-.134.127 146.349-111.43.033.085-146.248z"
        onClick={handleObjectClick}
      />
      <ellipse
        id="Entrance"
        cx={1157.655}
        cy={1072.459}
        rx={57}
        ry={57}
        className={`${className} object`}
        onClick={handleObjectClick}
      />
    </g>
  );
}

export default Objects;
