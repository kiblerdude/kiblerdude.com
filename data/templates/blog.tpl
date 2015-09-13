{extends file='main.tpl'}

{block name=content}
    <div class="container-fluid">
      <div class="row-fluid">

        <div class="span4">
          <div class="well sidebar-nav">
            <ul class="nav nav-list">
                {foreach from=$blogs item=b}
                    {if {$b->link} == $blogLink} 
                    <li class="active"><a href="#">{$b->title}</a></li> 
                    {else} 
                    <li><a href="/blog/{$b->link}">{$b->title}</a></li> 
                    {/if}
                {/foreach}
            </ul>
          </div><!--/.well -->
        </div><!--/span-->

        <div class="span8">
          <div class="row-fluid">
            {$markdown}
          </div><!--/row-->
        </div><!--/span-->
      </div><!--/row-->  
{/block}

