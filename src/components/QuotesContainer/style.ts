import styled from "styled-components"

export const Container = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 2px 10px;

    border-radius: 8px;

    overflow-x: hidden;

    background: var(--bg-quotes);
    width: 60%;

    &::-webkit-scrollbar { 
	display: none;
}
`

export const CurrencyContainer = styled.div`
    
    display: flex;
    justify-content: space-between;
    gap: 8px;

    div {
        
    height: 60%;
    padding: 4px;

    border-radius: 4px;
    background: var(--bg-header);

    font-size: 1rem;
    letter-spacing: 1.5px;

    display: flex;
    justify-content: space-between;
    flex-wrap: none;
    gap: 5px;
        
        p:nth-child(1){
            font-weight: 700;
            color: #ffffff;
        }
        p:nth-child(2){
            font-weight: 400;
            color: #ffffff;
        }
    }



`