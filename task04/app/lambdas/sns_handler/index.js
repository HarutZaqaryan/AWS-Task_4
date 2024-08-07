exports.handler = async (event) => {
    console.log('~~~Received event from SNS~~~:', JSON.stringify(event, null, 2));
 
    for (const record of event.Records) {
        console.log('SNS Message Body Message:', record.Sns.Message);
    }

    return event
    // return `Successfully processed ${event.Records.length} messages.`;
};