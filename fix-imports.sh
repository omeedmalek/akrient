#!/bin/bash

echo "🔧 Fixing import paths in questionnaire files..."

# List of files that need import path corrections
files=(
  "src/pages/ProjectTypeSelection.jsx"
  "src/pages/MAPEQuestionnaire.jsx"
  "src/pages/MinorityQuestionnaire.jsx"
  "src/pages/JointVenturesQuestionnaire.jsx"
)

# For each file, replace the incorrect paths with correct ones
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Fixing imports in $file..."
    
    # Use sed to replace all instances of components/ui/ with components/
    # On macOS, sed requires a backup extension, so we use .bak and then remove it
    sed -i.bak 's|components/ui/|components/|g' "$file"
    rm "${file}.bak"
    
    echo "✅ Fixed $file"
  else
    echo "⚠️  File not found: $file"
  fi
done

echo ""
echo "🎉 All import paths have been corrected!"
