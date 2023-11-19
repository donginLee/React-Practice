import React from 'react';
import styled  from 'styled-components';
import menu,{MenuItem} from '../pseudoAPI/menu';
const NavMenu=styled.ul`
    background-color:black;
    width:100%;
    height:100%;
    margin:0px;
    padding:0px;
    display :flex;
    align-items:center;
    justify-content:space-evenly;
    box-sizing:border-box;
    list-style-type: none;
    //border:2px solid white;
`;
const MenuList=styled.li`
    //border:2px solid pink;
    height:100%;
    box-sizing:border-box;
    align-items:center;

`;
const Menu=styled.div`
    color: white;
    padding-left:30px;
    padding-right:30px;
    font-size:16px;
    font-weight:bold;
    height:100%;
    margin:0px;
    position:relative;
    box-sizing:content-box;
    align-items:center;
    display:flex;
    //border:2px solid yellow;
    justify-contents:center;
    &:hover {
        color: #FFCB08;/* 원하는 호버 색상으로 변경 */
        
        box-sizing:border-box;
    }
`;


function NavigationMenu(){
    return(
        <NavMenu>
             {menu.map((item: MenuItem, index: number) => (
                        <MenuList key={index}>
                            <Menu key={index}>{Object.keys(item)[0]}</Menu>
                        </MenuList>
                ))}
        </NavMenu>
    );
}
export default NavigationMenu;