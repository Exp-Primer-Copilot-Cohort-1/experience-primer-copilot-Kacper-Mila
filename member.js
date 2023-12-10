function skillMember() {
    var skill = document.getElementById("skill").value;
    var member = document.getElementById("member").value;
    var skillMember = document.getElementById("skillMember");
    var skillMemberList = document.getElementById("skillMemberList");
    var skillMemberListLi = document.createElement("li");
    var skillMemberListLiText = document.createTextNode(skill + " : " + member);
    skillMemberListLi.appendChild(skillMemberListLiText);
    skillMemberList.appendChild(skillMemberListLi);
    skillMember.value = "";
    member.value = "";
}