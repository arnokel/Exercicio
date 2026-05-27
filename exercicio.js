
<!DOCTYPE html>
<html>
<head>
    <title>Teste JS</title>
</head>
<body>

<script>

{
    let texto = "1999";
    let num = parseInt(texto);
    alert(num+27);
}
{
    let txt = "29.99"
    let txtnum = parseFloat(txt)
    console.log(txtnum * 2)
}
{
    let numt = "5"
    let num = 5
    // Para realizar a soma terá que transformar o 'numt' em um numero  interiro, caso não fizer isso a soma     terá o resultado de '55'
    let numt1 = parseInt(numt)
    console.log(numt1 + num)
}
{
    let numt = "150"
    let num = +numt
    console.log(typeof num)
}
{
    let num = 9850
    let txt = toString(num)
    console.log(typeof txt)
}
{
    
    Boolean = false
    let txt = toString(Boolean)
    console.log(typeof txt)
    */
    // Maneira correta:
    let flag = false
    let txtflag = String(flag)
    console.log(txtflag === "false")
}
{
    console.log(Number (false))
    console.log(Number(true))
}
{
    let result = Number("R$ 50,00")
    if (isNaN(resultado)) {
        console.log("Falhou")
    }
}
{
    let vazio = ""
    console.log(Number(vazio))
}

</script>
</body>