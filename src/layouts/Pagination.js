import Button from "@mui/material/Button";
import React from "react";
import styled from "@emotion/styled";


const StyledButton = styled(Button)(({theme, color = 'primary'}) => ({
    '&:hover': {
        backgroundColor: 'rgba(85,19,66,0.03)',
    },
    color: "#551342a3"
}));


function Pagination({nPages, currentPage, setCurrentPage}) {
    const pageNumbers = Array.from({length: nPages}, (_, index) => index + 1);
    const nextPage = () => {
        if (currentPage !== nPages)
            setCurrentPage(currentPage + 1)
    };
    const prevPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    };

    return (
        <div>
            <StyledButton
                onClick={prevPage}>Previous</StyledButton>
            {pageNumbers.map(pageNum => (
                <StyledButton
                    style={{background: currentPage === pageNum ? "rgba(85,19,66,0.18)" : ""}}
                    onClick={() => setCurrentPage(pageNum)}
                    key={pageNum}>
                    {pageNum}
                </StyledButton>
            ))}
            <StyledButton onClick={nextPage}>Next</StyledButton>
        </div>
    );


}

export default Pagination;