import { SearchDiv, Form, StyledSearchIcon } from './SearchForm.styled';

const SearchForm = ({ handleSubmit }) => {
  return (
    <div>
      <SearchDiv>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter movie name..."
            name="searchQuery"
            autoFocus
          />
          <button type="submit">
            <StyledSearchIcon />
          </button>
        </Form>
      </SearchDiv>
    </div>
  );
};

export { SearchForm };
