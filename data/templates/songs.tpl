{extends file='main.tpl'}

{block name=content}
<div ng-controller="SongController" ng-cloak>
    <h1>Songs</h1>      
    <p class="lead">
        Here is the forever growing list of songs I can play, currently about {literal}{{totalSongs}}{/literal} different songs.  If you are listening live, feel free to make a request.
    </p>
    
    <input type="text" class="form-control input-lg" placeholder="Search" ng-model="query"/>
    
    <hr/>

    <table class="table table-striped" ng-repeat="m in music">
        <tr>
            <th colspan="2" style="font-size:18px;">
                {literal}{{m.Category}}{/literal}
            </th>
        </tr>
        <tr ng-repeat="s in m.Songs | filter:query">
            <td width="50%">{literal}{{s.Artist}}{/literal}</td>
            <td width="50%">{literal}{{s.Song}}{/literal}</td>
        </tr>
    </table>

</div> 
{/block}

