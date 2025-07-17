<?php
// Capture form inputs
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$subject = $_POST['subject'] ?? 'New Contact Form Message';
$message = $_POST['message'] ?? '';

if (!$name || !$email || !$message) {
    echo "Error: Missing required fields.";
    exit;
}

// Mailjet API credentials
$apiKey = 'YOUR_MAILJET_API_KEY';
$apiSecret = 'YOUR_MAILJET_API_SECRET';

// Mailjet API endpoint
$url = 'https://api.mailjet.com/v3.1/send';

// Email data
$data = [
    'Messages' => [
        [
            'From' => [
                'Email' => 'your_verified_email@domain.com',
                'Name' => 'Your Website'
            ],
            'To' => [
                [
                    'Email' => 'recipient_email@domain.com',
                    'Name' => 'Your Name'
                ]
            ],
            'Subject' => $subject,
            'TextPart' => strip_tags($message),
            'HTMLPart' => "
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> {$name}</p>
                <p><strong>Email:</strong> {$email}</p>
                <p><strong>Subject:</strong> {$subject}</p>
                <p><strong>Message:</strong><br>{$message}</p>
            ",
            'ReplyTo' => [
                'Email' => $email,
                'Name' => $name
            ]
        ]
    ]
];

// Send email using cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_USERPWD, $apiKey . ':' . $apiSecret);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode == 200) {
    echo "Message sent successfully!";
} else {
    echo "Error sending message: " . $response;
}
?>
