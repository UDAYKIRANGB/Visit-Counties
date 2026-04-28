import styled from 'styled-components'

export const BgContainer = styled.div`
   display:flex;
   flex-direction:column;
   background-color: #161624;
   min-height:100vh;
   padding:3px 60px;
`

export const Heading = styled.h1`
   font-size:22px;
   color:white;
   font-weight:500;
   margin-bottom:4px;
`

export const ContriesList = styled.ul`
   background-color:#334155;
   display:flex;
   flex-direction:column;
   border-radius:8px;
   height:40vh;
   padding:0px;
   list-style-type:none;
   overflow-y:auto;
   border:1px solid  #f1f5f9;
   margin-bottom:4px;
`

export const ListItem = styled.li`
   display:flex;
   align-items:center;
   justify-content:space-between;
   padding-left:30px;
   padding-right:30px;
`
export const Line = styled.hr`
  width:100%;
  border:1px solid  #f1f5f9;
  margin-buttom:0px;
  padding-buttom:0px;
`

export const Name = styled.p`
  color:white;
`

export const ButtonElement = styled.button`
   background-color:#3b82f6;
   width:70px;
   height:30px;
   color:white;
   border:none; 
   border-radius:5px;
`

export const VistiedCountriesList = styled.ul`
   display:flex;
   flex-wrap:wrap;
   padding:0px;
   list-style-type:none;
`

export const VistiedText = styled.p`
  color: #94a3b8;
  padding-right:10px;
  
`
