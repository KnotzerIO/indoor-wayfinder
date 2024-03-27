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
        id="o24"
        className={`${className} object`}
        d="M430.273 910.876l120.253.333-1.054 114.46-119.468.792.269-115.585z"
        onClick={handleObjectClick}
      />
      <path
        id="o24"
        className={`${className} object`}
        d="M303.324 910.876l120.253.333-2.042 115.252-118.443.698.232-116.283z"
        onClick={handleObjectClick}
      />
      <path
        id="o24"
        className={`${className} object`}
        d="M172.029 911.04l122.833-.164-.243 116.283-122.709.667.119-116.786z"
        onClick={handleObjectClick}
      />
      <path
        id="o24"
        className={`${className} object`}
        d="M684.126 911.04l123.189.003-1.08 114.297-122.947.503.838-114.803z"
        onClick={handleObjectClick}
      />
      <path
        id="o24"
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
    </g>
  );
}

export default Objects;
