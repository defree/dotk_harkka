/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var sisalto = "";

$( document ).ready(function() {
    $('#main').load("etusivu_sisalto.txt");
    
    $('.menulistitem').on('click',function() {
        //$('#main').empty();
        
        sisalto = $(this).text().toLowerCase();
        
        $('#main').load(sisalto + "_sisalto.txt");
        
    });
});