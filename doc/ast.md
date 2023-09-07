# AST

## HTML

### status list

- 0:waitTagOrTextOrComment
- ――――――――――――――――――――
- 11:waitTagName
- 20:waitTagAttr
- ――――――――――――――――――――
- 21:waitTagAttrName
- 22:waitTagAttrEq
- 23:waitTagAttrVal
- 24:waitTagAttrValEnd
- ――――――――――――――――――――
- 1:tagInner
- ――――――――――――――――――――
- 55:waitTextEnd
- ――――――――――――――――――――
- 77:waitStringEnd
- 88:waitCommentEnd
- 44:error

### AST Object

{
  subA  //sub object list
  rnc   //file line count
  TODO: ???
}

#### tag Object

{
  isTag //=1
  rnb  //row number begin 1~
  cnb  //row number end 1~
  rne  //col number begin
  cne  //col number end
  t    //tag name string
  attrA  //tag attribute list
  subA   //tag sub object list
  sss  //src text (only used in "!---" and "!--" tag)
}

#### tag attribute Object

{
  rnb  //row number begin 1~
  cnb  //row number end 1~
  rne  //col number begin
  cne  //col number end
  t    //tag attribute name
  v    //tag attribute value
}

#### comment Object

{
  rnb  //row number begin 1~
  cnb  //row number end 1~
  rne  //col number begin
  cne  //col number end
  t    //!--- or !--
  sss  //comment text
}

#### text Object

{
  isTxt //=1
  rnb  //row number begin 1~
  cnb  //row number end 1~
  rne  //col number begin
  cne  //col number end
  sss  //src text
}

### 0:waitTag

check: next char
  case '<':  //tag
    to 11:waitTagName
  case ' ':  //blank char like ' '; '\n'; '\r'; '\t'; '　'; ...
    to 0:waitTag
  case else: //text
    to 55:waitTextEnd

### 55:waitTextEnd

check: next char
  case '<':  //tag
    to 11:waitTagName
  case else: //text
    to 55:waitTextEnd

### word abbr

sta: state
staA: state array
ctO: current object
ptO: parent object
ptOA: parent object array
tagS: tag string
attrS: attribute string
