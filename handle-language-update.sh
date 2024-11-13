#!/bin/bash

# Path to the configuration file
CONFIG_FILE="languages/pot-languages"

# Check if the configuration file exists
if [ ! -f "$CONFIG_FILE" ]; then
    echo "Configuration file not found: $CONFIG_FILE"
    exit 1
fi

# Update the .pot file
composer update-pot

# Loop through each language in the configuration file
while IFS= read -r language; do
    if [ -n "$language" ]; then
        # Define the .po file path
        po_file="languages/${language}.po"

        # Check if the .po file exists, create it if not
        if [ ! -f "$po_file" ]; then
            echo "Creating empty .po file for $language"
            touch "$po_file"
        fi

        # Update the .po file for the current language
        wp i18n update-po languages/_s.pot "$po_file"

        # Make the .mo file for the current language
        wp i18n make-mo "$po_file" languages/
    fi
done < "$CONFIG_FILE"

# Once the file has been created, it must be made executable with this command
chmod +x handle-language-update.sh