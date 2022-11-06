import { ColorMalachite } from "../../../../styles/colors";
import styled from "styled-components";

export const PaginationButton = styled.button`
  -webkit-appearance: none;
  align: center;
  background-color: inherit;
  border: none;
  display: inline-block;
  outline: none;
  padding: 0.25rem;
  color: ${ColorMalachite};
  font-weigth: 800;
  text-align: center;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  color: ${ColorMalachite};
`;

export const getPageNumbers = (
  current: number,
  range: number,
  min: number,
  max: number
) => {
  const startOffset = Math.min(current - range, min) - min;
  const endOffset = Math.max(current + range - max, 0);
  return new Array(range * 2 + 1)
    .fill(current - range)
    .map((item, index) => item + index - startOffset - endOffset)
    .filter((item) => item >= min && item <= max);
};

const FIRST_PAGE = 1;

const getPage = (current: number, onPaginationChange: Function) => () => {
  onPaginationChange(current);
};

const renderLeftArrows = (current: number, onPaginationChange: Function) => {
  return (
    <>
      <PaginationButton
        disabled={current === FIRST_PAGE}
        onClick={getPage(FIRST_PAGE, onPaginationChange)}
      >
        {"<<"}
      </PaginationButton>

      <PaginationButton
        disabled={current === FIRST_PAGE}
        onClick={getPage(current - 1, onPaginationChange)}
      >
        {"<"}
      </PaginationButton>
    </>
  );
};

const renderRightArrows = (
  current: number,
  onPaginationChange: Function,
  pagesCount: number
) => {
  return (
    <>
      <PaginationButton
        disabled={current === pagesCount}
        onClick={getPage(current + 1, onPaginationChange)}
      >
        {">"}
      </PaginationButton>

      <PaginationButton
        disabled={current === pagesCount}
        onClick={getPage(pagesCount, onPaginationChange)}
      >
        {">>"}
      </PaginationButton>
    </>
  );
};

const renderFigures = (
  current: number,
  onPaginationChange: Function,
  pagesCount: number,
  range: number
) => {
  const buttons = getPageNumbers(current, range, 1, pagesCount);
  return (
    <>
      {buttons.map((index) => (
        <PaginationButton
          disabled={index > pagesCount || index < FIRST_PAGE}
          onClick={getPage(index, onPaginationChange)}
          key={index}
        >
          {index}
        </PaginationButton>
      ))}
    </>
  );
};

interface Props {
  onChange: Function;
  pageSize: number;
  total: number;
  current: number;
  range: number;
}
export const Paginator = ({
  onChange,
  pageSize,
  total,
  current,
  range,
}: Props) => {
  const pagesCount = Math.ceil(total / pageSize);
  return (
    <PaginationContainer>
      <div>
        {renderLeftArrows(current, onChange)}
        {renderFigures(current, onChange, pagesCount, range)}
        {renderRightArrows(current, onChange, pagesCount)}
      </div>
    </PaginationContainer>
  );
};
