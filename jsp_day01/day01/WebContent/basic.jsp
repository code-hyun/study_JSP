<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JSP 기초</title>
</head>
<body>
	<%String data = "안녕";%>
	<h1><%=data %></h1>
	
	<table>
	<%for(int i=0; i<2; i++) {%>
		<tr>
			<%for(int j=0; j<2; j++){ %>
			<td>한동석</td>
			<%} %>
		</tr>
	<%} %>
	</table>
</body>
</html>