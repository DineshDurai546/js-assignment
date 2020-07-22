function Check()
{
    var n,p
    n=document.getElementById("num").value
    for(var i=1;i<=10;i++)
    {
        p=i*n;
        console.log(i+" * "+n+" = "+p)
    }
}
