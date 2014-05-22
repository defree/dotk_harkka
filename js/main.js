/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var sisalto = "";

$( document ).ready(function() {
    $('#main').load("etusivu_sisalto.html");
    
    $('.menulistitem').on('click',function() {
        //$('#main').empty();
        
        sisalto = $(this).text().toLowerCase();
        sisalto = sisalto.replace(/\s+/g,"_");
        //alert(sisalto);
        
        
        $('#main').load(sisalto + "_sisalto.html");
        
    });
});