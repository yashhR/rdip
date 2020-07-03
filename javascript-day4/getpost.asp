<%
dim fname,course
fname=Request.Form("name")
course=Request.Form("course")
Response.Write("Hello " & fname & ". ")
Response.Write("You're doing" & course & ".")
%>