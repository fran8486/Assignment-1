$(function() {
    // GET/READ
    $('#get-tweets-button').on('click', function() {//this sets up the function in response to clicking the button to get all tweets
        $.ajax({
            type:'GET',
            url: 'getinfo',// sets up the pathway to the server
            contentType: 'application/json',
            success: function(response) {//gets the response form the pathway if successful

                //console.log(response);
                var tbodyEl = $('tbody');

                tbodyEl.html('');

                let _dat = JSON.parse(response)
                console.log(_dat)

                //console.log(_dat[1])
                _dat.forEach(function(obj) {// would output the id, time created, name of the person tweeting and the tweet. also adds an update and delete button to delete or update the tweet
                    tbodyEl.append('\
                        <tr>\
                            <td class="id">' + obj.id + '</td>\
                            <td><class="name">' + obj.user.name + '</td>\
                            <td class="time">' + obj.created_at + '</td>\
                            <td><class="tweet">' + obj.text + '</td>\
                            <td>\
                                <button class="update-button">UPDATE</button>\
                                <button class="delete-button">DELETE</button>\
                            </td>\
                        </tr>\
                    ');
                });
             }
         });
        
    });
    $('#get-users-button').on('click', function() {//this sets up the function in response to clicking the button to get all tweets
        $.ajax({
            type:'GET',
            url: 'getinfo',// sets up the pathway to the server
            contentType: 'application/json',
            success: function(response) {//gets the response form the pathway if successful

                //console.log(response);
                var tbodyEl = $('tbody');

                tbodyEl.html('');

                let _dat = JSON.parse(response)
                console.log(_dat)

                //console.log(_dat[1])
                _dat.forEach(function(obj) {// would output the id, time created, name of the person tweeting and the tweet. also adds an update and delete button to delete or update the tweet
                    tbodyEl.append('\
                        <tr>\
                            <td><class="id">' + obj.user.id + '</td>\
                            <td><class="name">' + obj.user.name + '</td>\
                            </td><class="time">' + " " + '</td>\
                            </td></td>\
                            <td>\
                                <button class="update-button">UPDATE</button>\
                                <button class="delete-button">DELETE</button>\
                            </td>\
                        </tr>\
                    ');
                });
             }
         });
        
    });

    //was meant to be used to create the a new tweet upon confirming tweet
//                            <td class="time">' + obj.created_at + '</td>\
//                            <td><class="tweet">' + obj.text + '</td>\
    // CREATE/POST
    // $('#create-form').on('submit', function(event) {
    //     event.preventDefault();

    //     var createInput = $('#create-input');

    //     $.ajax({
    //         url: '/products',
    //         method: 'POST',
    //         contentType: 'application/json',
    //         data: JSON.stringify({ name: createInput.val() }),
    //         success: function(response) {
    //             console.log(response);
    //             createInput.val('');
    //             $('#get-button').click();
    //         }
    //     });
    // });
//was meant to be used to update the screen name. 
    // // UPDATE/PUT
    // $('table').on('click', '.update-button', function() {
    //     var rowEl = $(this).closest('tr');
    //     var id = rowEl.find('.id').text();
    //     var newName = rowEl.find('.name').val();

    //     $.ajax({
    //         url: '/products/' + id,
    //         method: 'PUT',
    //         contentType: 'application/json',
    //         data: JSON.stringify({ newName: newName }),
    //         success: function(response) {
    //             console.log(response);
    //             $('#get-button').click();
    //         }
    //     });
    // });
// was meant to be used to delete the tweet once id was given
    // // DELETE
    // $('table').on('click', '.delete-button', function() {
    //     var rowEl = $(this).closest('tr');
    //     var id = rowEl.find('.id').text();

    //     $.ajax({
    //         url: '/products/' + id,
    //         method: 'DELETE',
    //         contentType: 'application/json',
    //         success: function(response) {
    //             console.log(response);
    //             $('#get-button').click();
    //         }
    //     });
    // });
});