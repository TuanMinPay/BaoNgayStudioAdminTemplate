!function($){$(function(){var $window=$(window)
$('section [href^=#]').click(function(e){e.preventDefault()})
setTimeout(function(){$('.bs-docs-sidenav').affix({offset:{top:function(){return $window.width()<=980?290:400},bottom:270}})},100)
window.prettyPrint&&prettyPrint()
$('.add-on :checkbox').on('click',function(){var $this=$(this),method=$this.attr('checked')?'addClass':'removeClass'
$(this).parents('.add-on')[method]('active')})
if($('#gridSystem').length){$('#gridSystem').tooltip({selector:'.show-grid > [class*="span"]',title:function(){return $(this).width()+'px'}})}
$('.tooltip-demo').tooltip({selector:"a[data-toggle=tooltip]"})
$('.tooltip-test').tooltip()
$('.popover-test').popover()
$("a[data-toggle=popover]").popover().click(function(e){e.preventDefault()})
$('#fat-btn').click(function(){var btn=$(this)
btn.button('loading')
setTimeout(function(){btn.button('reset')},3000)})
$('#myCarousel').carousel()
var inputsComponent=$("#components.download input"),inputsPlugin=$("#plugins.download input"),inputsVariables=$("#variables.download input")
$('#components.download .toggle-all').on('click',function(e){e.preventDefault()
inputsComponent.attr('checked',!inputsComponent.is(':checked'))})
$('#plugins.download .toggle-all').on('click',function(e){e.preventDefault()
inputsPlugin.attr('checked',!inputsPlugin.is(':checked'))})
$('#variables.download .toggle-all').on('click',function(e){e.preventDefault()
inputsVariables.val('')})
$('.download-btn .btn').on('click',function(){var css=$("#components.download input:checked").map(function(){return this.value}).toArray(),js=$("#plugins.download input:checked").map(function(){return this.value}).toArray(),vars={},img=['glyphicons-halflings.png','glyphicons-halflings-white.png']
$("#variables.download input").each(function(){$(this).val()&&(vars[$(this).prev().text()]=$(this).val())})
$.ajax({type:'POST',url:/\?dev/.test(window.location)?'http://localhost:3000':'http://bootstrap.herokuapp.com',dataType:'jsonpi',params:{js:js,css:css,vars:vars,img:img}})})})
$.ajaxTransport('jsonpi',function(opts,originalOptions,jqXHR){var url=opts.url;return{send:function(_,completeCallback){var name='jQuery_iframe_'+jQuery.now(),iframe,form
iframe=$('<iframe>').attr('name',name).appendTo('head')
form=$('<form>').attr('method',opts.type).attr('action',url).attr('target',name)
$.each(opts.params,function(k,v){$('<input>').attr('type','hidden').attr('name',k).attr('value',typeof v=='string'?v:JSON.stringify(v)).appendTo(form)})
form.appendTo('body').submit()}}})}(window.jQuery)