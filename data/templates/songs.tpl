{extends file='main.tpl'}

{block name=content}
    <h1>Songs</h1>      
    <p class="lead">
        Here is the forever growing list of songs I can play, currently about {$totalSongs} different songs.  If you are listening live, feel free to make a request.
        </p>        
        <table class="table table-striped">
        
            {foreach from=$genres key=genre item=songs}
                <tr>
                    <th colspan="2" style="font-size:18px;">{$genre}</th>
                </tr>
                {foreach from=$songs item=song}
                    <tr>
                        <td>{$song->artist}</td>
                        <td>{$song->song}</td>           
                    </tr>
                {/foreach}                         
            {/foreach}                 
        </table>       
{/block}

