/**
 * Created by xuesong on 15/5/14.
 */
(function($){
    $.fn.stickyListHeader=function(){
        return this.each(function(i){
            var $this=$(this);
            var $header=$this.children('a');
            var oHeight=$header.outerHeight();
            var $ul=$this.children('ul');
            var $items=$ul.children();
            var $titles=$items.children('a');
            $(window).on('scroll',function(e){
                var sTop=$(this).scrollTop();
                var selfTop=[];
                $titles.each(function(){
                    var $title=$(this);
                    selfTop=$(this).offset().top;
                    if(sTop+oHeight>=selfTop){
                        $header.html($(this).html());
                    }
                });
            });
        });
    };
})(jQuery);