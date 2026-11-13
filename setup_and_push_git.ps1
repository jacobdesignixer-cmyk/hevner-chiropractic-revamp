$repoName = "hevner-chiropractic-revamp"
$repoDesc = "Hevner Chiropractic Center | Modern Homepage Revamp with Authentic Clinic Assets & Glassmorphism"

# 1. Retrieve GitHub Token from Credential Helper
$inputStr = "protocol=https`nhost=github.com`n`n"
$credOutput = $inputStr | git credential fill
$token = ""
foreach ($line in $credOutput) {
    if ($line -match '^password=(.+)$') {
        $token = $matches[1]
    }
}

if (-not $token) {
    Write-Host "Error: Could not retrieve GitHub credentials from git credential helper."
    exit 1
}

$headers = @{
    "Authorization" = "Bearer $token"
    "User-Agent" = "PowerShell-Git-Script"
    "Accept" = "application/vnd.github+json"
}

# 2. Check or Create Repo on GitHub
$repoUrl = "https://github.com/jacobdesignixer-cmyk/$repoName.git"
Write-Host "Checking if repository '$repoName' exists on GitHub..."

try {
    $existing = Invoke-RestMethod -Uri "https://api.github.com/repos/jacobdesignixer-cmyk/$repoName" -Headers $headers -Method Get
    Write-Host "Repository already exists at: $($existing.html_url)"
} catch {
    Write-Host "Repository does not exist yet. Creating public repository '$repoName'..."
    $body = @{
        name = $repoName
        description = $repoDesc
        private = $false
        has_issues = $true
        has_projects = $true
        has_wiki = $false
    } | ConvertTo-Json

    try {
        $created = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Headers $headers -Method Post -Body $body
        Write-Host "Repository successfully created: $($created.html_url)"
    } catch {
        Write-Host "Failed to create repo via /user/repos: $_"
        exit 1
    }
}

# 3. Initialize Git Locally
if (-not (Test-Path ".git")) {
    Write-Host "Initializing local git repository..."
    git init
}

# 4. Set Main branch
git branch -M main

# 5. Configure Remote Origin
$currentRemotes = git remote
if ($currentRemotes -contains "origin") {
    git remote set-url origin $repoUrl
} else {
    git remote add origin $repoUrl
}
Write-Host "Remote origin set to: $repoUrl"

# 6. Stage and Commit
git add .
$status = git status --porcelain
if ($status) {
    Write-Host "Committing project files..."
    git commit -m "Initial commit: Hevner Chiropractic Center homepage revamp with glassmorphism, responsive layout, and authentic assets"
} else {
    Write-Host "No changes to commit."
}

# 7. Push to Remote
Write-Host "Pushing to GitHub..."
git push -u origin main

Write-Host "SUCCESS: Repository pushed to GitHub: $repoUrl"
