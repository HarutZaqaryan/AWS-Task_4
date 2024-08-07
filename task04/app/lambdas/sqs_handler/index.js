exports.handler = async (event) => {
    console.log('~~~Received event~~~:', JSON.stringify(event, null, 2));
 
    for (const record of event.Records) {
        console.log('Message Body:', record.body);
    }

    return `Successfully processed ${event.Records.length} messages.`;
};