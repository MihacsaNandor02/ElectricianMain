$files = Get-ChildItem -Path "e:\Projektek\Electrician-Main_site\src" -Include "*.tsx", "*.ts" -Recurse
foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    $newContent = $content.Replace("Äƒ", "ă").Replace("Ä‚", "Ă").Replace("Ã¢", "â").Replace("Ã‚", "Â").Replace("Ã®", "î").Replace("ÃŽ", "Î").Replace("È™", "ș").Replace("È˜", "Ș").Replace("È›", "ț").Replace("Èš", "Ț").Replace("ÅŸ", "ș").Replace("Å£", "ț").Replace("â€œ", '"').Replace("â€", '"').Replace("â€“", "-")
    
    if ($content -cne $newContent) {
        [System.IO.File]::WriteAllText($f.FullName, $newContent, [System.Text.Encoding]::UTF8)
        Write-Host "Fixed $($f.FullName)"
    }
}
