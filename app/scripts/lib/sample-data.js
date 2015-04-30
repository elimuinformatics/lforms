/**
 * Modified USSG-FHT panel data
 */
var FHTData = {
  // this is an example showing the JSON format based on the US Surgeon General family health portrait.
  // form type, required. Other possible types: "SDC"
  type: "LOINC",
  // form code, required, the top-level LOINC item's LOINC code in a panel is listed here.
  code: "54127-6N",
  // form name, required. the top-level LOINC item's name in a panel is listed here.
  name: "USSG-FHT, (with mock-up items for skip logic demo)",
  // predefined template name. optional, if not provided, a default template will be used for certain form "type"
  template: "panelTableV",
  // template configuration data. optional, if not provided, a default configuration will be used for the selected
  // template. the format/content is not ready for publish yet.
  templateOption: {},
  // question items, required
  items: [
    {"questionCode": "54126-8", "parentQuestionCode": "", "questionCardinality": {"min": 1, "max": 1}, "question": "Your health information", "answers": "", "dataType": "", "units": "", "header": true},
    {"questionCode": "54125-0", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": -1}, "question": "Name", "answers": "", "dataType": "ST", "units": "", "header": false},
    {"questionCode": "54131-8", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Gender", "answers": 622, "answerCardinality": {"min": 1, "max": 1},"dataType": "CNE", "units": "", "header": false},
    {"questionCode": "21112-8", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Date of Birth", "answers": "", "dataType": "DT", "units": "", "header": false},
    {"questionCode": "54132-6", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Were you born a twin?", "answers": 623, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54128-4", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Were you adopted?", "answers": 361, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54135-9", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Are your parents related to each other in any way other than marriage?", "answers": 361, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "8302-2", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Height", "answerCardinality": {"min": 1, "max": 1},"codingInstructions": "Try to type 10, 12, 15, 16, 25", "answers": "", "dataType": "REAL", "units": [
      {"name": "inches", "default": true},
      {"name": "centimeters"}
    ], "header": false, "skipLogic": [
      {"trigger": {"value": 12}, "action": "show", "targets": ["8302-2X"]},
      {"trigger": {"minInclusive": 10}, "action": "show", "targets": ["8302-2Y"]},
      {"trigger": {"minExclusive": 15, "maxInclusive": 20}, "action": "show", "targets": ["8302-2Z"]}
    ]},
    {"questionCode": "8302-2X", "parentQuestionCode": "8302-2", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: Shown when Height is 12", "answers": "", "dataType": "REAL", "units": "", "header": false},
    {"questionCode": "8302-2Y", "parentQuestionCode": "8302-2", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: Shown when Height >= 10", "answers": "", "dataType": "REAL", "units": "", "header": false},
    {"questionCode": "8302-2Z", "parentQuestionCode": "8302-2", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: Shown when Height >15 and Height <= 20", "answers": "", "dataType": "REAL", "units": "", "header": false},
    {"questionCode": "29463-7", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Weight", "answers": "", "dataType": "REAL", "units": [
      {"name": "lbs", "default": true},
      {"name": "kgs"}
    ], "header": false},
    {"questionCode": "39156-5", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: Body mass index (BMI) [Ratio]", "answers": "", "dataType": "", "units": "", "header": false, "formula":{"name":"BMI","value":["29463-7","8302-2"]}},
    {"questionCode": "54134-2", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Race", "answerCardinality": {"min": 0, "max": -1}, "answers": 629, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54133-4", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Ethnicity", "answerCardinality": {"min": 0, "max": -1}, "answers": 628, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54137-5", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": -1}, "question": "Your diseases history", "answers": "", "dataType": "", "units": "", "header": true},
    {"questionCode": "54140-9", "parentQuestionCode": "54137-5", "questionCardinality": {"min": 1, "max": 1}, "question": "Disease or Condition", "answers": 626, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54130-0", "parentQuestionCode": "54137-5", "questionCardinality": {"min": 1, "max": 1}, "question": "Age at Diagnosis", "answers": 619, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54114-4", "parentQuestionCode": "", "questionCardinality": {"min": 1, "max": -1}, "question": "Family member health information", "answers": "", "dataType": "", "units": "", "header": true},
    {"questionCode": "54136-7", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": 1}, "question": "Relationship to you", "answers": 621, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54138-3", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": 1}, "question": "Name", "answers": "", "dataType": "ST", "units": "", "header": false},
    {"questionCode": "54123-5", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": 1}, "question": "Gender", "answers": 622, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54139-1", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": 1}, "question": "Living?", "answers": 624, "dataType": "CNE", "units": "", "header": false, "skipLogic": [
      {"trigger": {"code": "LA33-6"}, "action": "show", "targets": ["54124-3", "54141-7"]},
      {"trigger": {"code": "LA32-8"}, "action": "show", "targets": ["54112-8", "54113-6"]}
    ]},
    {"questionCode": "54124-3", "parentQuestionCode": "54139-1", "questionCardinality": {"min": 1, "max": 1}, "question": "Date of Birth", "answers": "", "dataType": "DT", "units": "", "header": false},
    {"questionCode": "54141-7", "parentQuestionCode": "54139-1", "questionCardinality": {"min": 1, "max": 1}, "question": "Age", "answers": "", "dataType": "REAL", "units": "", "header": false},
    {"questionCode": "54112-8", "parentQuestionCode": "54139-1", "questionCardinality": {"min": 1, "max": 1}, "question": "Cause of Death", "answers": 627, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54113-6", "parentQuestionCode": "54139-1", "questionCardinality": {"min": 1, "max": 1}, "question": "Age at Death", "answers": 619, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54121-9", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": 1}, "question": "Was this person born a twin?", "answers": 623, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54122-7", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": 1}, "question": "Was this person adopted?", "answers": 361, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54119-3", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": 1}, "question": "Race", "answerCardinality": {"min": 0, "max": -1}, "answers": 629, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54120-1", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": 1}, "question": "Ethnicity", "answerCardinality": {"min": 0, "max": -1}, "answers": 628, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54117-7", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": -1}, "question": "This family member's history of disease", "answers": "", "dataType": "", "units": "", "header": true},
    {"questionCode": "54116-9", "parentQuestionCode": "54117-7", "questionCardinality": {"min": 1, "max": 1}, "question": "Disease or Condition", "answers": 626, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54115-1", "parentQuestionCode": "54117-7", "questionCardinality": {"min": 1, "max": 1}, "question": "Age at Diagnosis", "answers": 619, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "8302-2", "parentQuestionCode": "54117-7", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: Height", "codingInstructions": "", "answers": "", "dataType": "REAL", "units": [
      {"name": "inches", "default": true},
      {"name": "centimeters"}
    ], "header": false},
    {"questionCode": "29463-7", "parentQuestionCode": "54117-7", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: Weight", "answers": "", "dataType": "REAL", "units": [
      {"name": "lbs", "default": true},
      {"name": "kgs"}
    ], "header": false},
    {"questionCode": "39156-5", "parentQuestionCode": "54117-7", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: Body mass index (BMI) [Ratio]", "answers": "", "dataType": "REAL", "units": "", "header": false, "formula":{"name":"BMI","value":["29463-7","8302-2"]}},

  ],

  // answer list could be embedded directly in the "answers" field in "items", or,
  // all answer lists could be merged together in a separate "answerLists" object by creating an answer list id for
  // each list, as listed below, so that duplicated answer lists only need to be included once.
  answerLists: {
    "622": [
      {"text": "Male", "code": "LA2-8"},
      {"text": "Female", "code": "LA3-6"},
      {"text": "Other", "code": "LA46-8", "other": "Please Specify"}
    ],
    "623": [
      {"text": "Yes - Identical (Same)", "code": "LA10427-5", "label": "A"},
      {"text": "Yes - Fraternal (Different)", "code": "LA10428-3", "label": "B"},
      {"text": "No", "code": "LA32-8", "label": "C"}
    ],
    "361": [
      {"text": "Yes", "code": "LA33-6"},
      {"text": "No", "code": "LA32-8"}
    ],
    "629": [
      {"text": "American  Indian or Alaska Native", "code": "LA10608-0"},
      {"text": "Asian", "code": "LA6156-9"},
      {"text": "-- Asian Indian", "code": "LA10614-8"},
      {"text": "-- Chinese", "code": "LA10615-5"},
      {"text": "-- Filipino", "code": "LA10616-3"},
      {"text": "-- Japanese", "code": "LA10617-1"},
      {"text": "-- Korean", "code": "LA10618-9"},
      {"text": "-- Vietnamese", "code": "LA10620-5"},
      {"text": "-- Other Asian", "code": "LA10619-7"},
      {"text": "Black or African American", "code": "LA10610-6"},
      {"text": "Native Hawaiian or Other Pacific Islander", "code": "LA10611-4"},
      {"text": "-- Native Hawaiian", "code": "LA10623-9"},
      {"text": "-- Guamanian", "code": "LA10622-1"},
      {"text": "-- Chamorro", "code": "LA10621-3"},
      {"text": "-- Samoan", "code": "LA10625-4"},
      {"text": "-- Other Pacific Islander", "code": "LA10624-7"},
      {"text": "White", "code": "LA4457-3"},
      {"text": "Other/Unknown/Refuse To Answer", "code": "LA10613-0"}
    ],
    "628": [
      {"text": "Hispanic or Latino", "code": "LA6214-6"},
      {"text": "-- Central American", "code": "LA10599-1"},
      {"text": "-- Cuban", "code": "LA10600-7"},
      {"text": "-- Dominican(Republic)", "code": "LA10601-5"},
      {"text": "-- Mexican", "code": "LA10602-3"},
      {"text": "-- Puerto Rican", "code": "LA10605-6"},
      {"text": "-- South American", "code": "LA10606-4"},
      {"text": "-- Other Latin American", "code": "LA10604-9"},
      {"text": "-- Other Hispanic/Latino/Spanish", "code": "LA10603-1"},
      {"text": "Non-Hispanic or Latino", "code": "LA10597-5"},
      {"text": "Ashkenazi Jewish", "code": "LA10598-3"},
      {"text": "Unknown/No answer", "code": "LA10607-2"}
    ],
    "626": [
      {"text": "Blood Clots", "code": "LA10533-0"},
      {"text": "-- Blood Clot in Leg", "code": "LA10572-8"},
      {"text": "-- Blood Clot in Lungs", "code": "LA10573-6"},
      {"text": "Cancer", "code": "LA10524-9"},
      {"text": "-- Bone", "code": "LA10549-6"},
      {"text": "-- Breast Cancer", "code": "LA10536-3"},
      {"text": "-- Colon Cancer", "code": "LA10537-1"},
      {"text": "-- Esophageal Cancer", "code": "LA10548-8"},
      {"text": "-- Gastric Cancer", "code": "LA10547-0"},
      {"text": "-- Kidney Cancer", "code": "LA10541-3"},
      {"text": "-- Leukemia", "code": "LA10545-4"},
      {"text": "-- Lung Cancer", "code": "LA10542-1"},
      {"text": "-- Muscle Cancer", "code": "LA10546-2"},
      {"text": "-- Ovarian Cancer", "code": "LA10539-7"},
      {"text": "-- Prostate Cancer", "code": "LA10538-9"},
      {"text": "-- Skin Cancer", "code": "LA10543-9"},
      {"text": "-- Thyroid Cancer", "code": "LA10540-5"},
      {"text": "-- Uterine Cancer", "code": "LA10544-7"},
      {"text": "-- Other Cancer", "code": "LA10550-4"},
      {"text": "Diabetes", "code": "LA10529-8"},
      {"text": "-- Diabetes Type 1", "code": "LA10551-2"},
      {"text": "-- Diabetes Type 2", "code": "LA10552-0"},
      {"text": "-- Gestational Diabetes", "code": "LA10553-8"},
      {"text": "Gastrointestinal Disease", "code": "LA10532-2"},
      {"text": "-- Crohn's Disease", "code": "LA10554-6"},
      {"text": "-- Irritable Bowel Syndrome", "code": "LA10555-3"},
      {"text": "-- Ulceritive Colitis", "code": "LA10556-1"},
      {"text": "-- Colon Polyps", "code": "LA10557-9"},
      {"text": "Heart Disease", "code": "LA10523-1"},
      {"text": "-- Heart Attack", "code": "LA10558-7"},
      {"text": "High Cholesterol/Hyperlipidemia", "code": "LA10526-4"},
      {"text": "Hypertension", "code": "LA7444-8"},
      {"text": "Kidney Disease", "code": "LA10528-0"},
      {"text": "-- Cystic Kidney Disease", "code": "LA10565-2"},
      {"text": "-- Kidney Disease Present From Birth", "code": "LA10566-0"},
      {"text": "-- Nephrosis", "code": "LA10567-8"},
      {"text": "-- Nephritis", "code": "LA10568-6"},
      {"text": "-- Nephrotic Syndrome", "code": "LA10569-4"},
      {"text": "-- Diabetic Kidney Disease", "code": "LA10570-2"},
      {"text": "-- Other/Unknown", "code": "LA10571-0"},
      {"text": "Lung Disease", "code": "LA10531-4"},
      {"text": "-- COPD", "code": "LA10559-5"},
      {"text": "-- Chronic Bronchitis", "code": "LA10560-3"},
      {"text": "-- Emphysema", "code": "LA10561-1"},
      {"text": "-- Chronic Lower Respiratory Disease", "code": "LA10562-9"},
      {"text": "-- Influenza/Pneumonia", "code": "LA10563-7"},
      {"text": "-- Asthma", "code": "LA10564-5"},
      {"text": "Neurological Disorders", "code": "LA10590-0"},
      {"text": "Osteoporosis", "code": "LA10527-2"},
      {"text": "Psychological Disorders", "code": "LA10535-5"},
      {"text": "-- Anxiety", "code": "LA10574-4"},
      {"text": "-- Bipolar/Manic Depressive Disorder", "code": "LA10575-1"},
      {"text": "-- Depression", "code": "LA10576-9"},
      {"text": "-- Attention Deficit Hyper Activity", "code": "LA10577-7"},
      {"text": "-- Autism", "code": "LA10578-5"},
      {"text": "-- Personality Disorder", "code": "LA10579-3"},
      {"text": "-- Eating Disorder", "code": "LA10580-1"},
      {"text": "-- Obsessive Compulsive Disorder", "code": "LA10581-9"},
      {"text": "-- Panic Disorder", "code": "LA10582-7"},
      {"text": "-- Post Traumatic Stress Disorder", "code": "LA10583-5"},
      {"text": "-- Schizophrenia", "code": "LA10584-3"},
      {"text": "-- Social Phobia", "code": "LA10585-0"},
      {"text": "-- Dementia", "code": "LA10586-8"},
      {"text": "Septicemia", "code": "LA10591-8"},
      {"text": "Stroke/Brain Attack", "code": "LA10522-3"},
      {"text": "Sudden Infant Death Syndrome", "code": "LA10530-6"}
    ],
    "619": [
      {"text": "Pre-Birth", "code": "LA10402-8"},
      {"text": "Newborn", "code": "LA10403-6"},
      {"text": "Infancy", "code": "LA10394-7"},
      {"text": "Childhood", "code": "LA10395-4"},
      {"text": "Adolescence", "code": "LA10404-4"},
      {"text": "20-29", "code": "LA10396-2"},
      {"text": "30-39", "code": "LA10397-0"},
      {"text": "40-49", "code": "LA10398-8"},
      {"text": "50-59", "code": "LA10399-6"},
      {"text": "OVER 60", "code": "LA10400-2"},
      {"text": "Unknown", "code": "LA4489-6"}
    ],
    "621": [
      {"text": "Daughter", "code": "LA10405-1"},
      {"text": "Granddaughter", "code": "LA10406-9"},
      {"text": "Grandson", "code": "LA10407-7"},
      {"text": "Half-brother", "code": "LA10408-5"},
      {"text": "Half-sister", "code": "LA10409-3"},
      {"text": "Maternal Aunt", "code": "LA10410-1"},
      {"text": "Maternal Cousin", "code": "LA10411-9"},
      {"text": "Maternal Grandfather", "code": "LA10412-7"},
      {"text": "Maternal Grandmother", "code": "LA10413-5"},
      {"text": "Maternal Uncle", "code": "LA10414-3"},
      {"text": "Brother", "code": "LA10415-0"},
      {"text": "Father", "code": "LA10416-8"},
      {"text": "Mother", "code": "LA10417-6"},
      {"text": "Sister", "code": "LA10418-4"},
      {"text": "Nephew", "code": "LA10419-2"},
      {"text": "Niece", "code": "LA10420-0"},
      {"text": "Paternal Aunt", "code": "LA10421-8"},
      {"text": "Paternal Cousin", "code": "LA10422-6"},
      {"text": "Paternal Grandfather", "code": "LA10423-4"},
      {"text": "Paternal Grandmother", "code": "LA10424-2"},
      {"text": "Paternal Uncle", "code": "LA10425-9"},
      {"text": "Son", "code": "LA10426-7"}
    ],
    "624": [
      {"text": "Yes", "code": "LA33-6"},
      {"text": "No", "code": "LA32-8"},
      {"text": "Unknown", "code": "LA4489-6"}
    ],
    "627": [
      {"text": "Blood Clots", "code": "LA10533-0"},
      {"text": "-- Blood Clot in Leg", "code": "LA10572-8"},
      {"text": "-- Blood Clot in Lungs", "code": "LA10573-6"},
      {"text": "Cancer", "code": "LA10524-9"},
      {"text": "-- Bone", "code": "LA10549-6"},
      {"text": "-- Breast Cancer", "code": "LA10536-3"},
      {"text": "-- Colon Cancer", "code": "LA10537-1"},
      {"text": "-- Esophageal Cancer", "code": "LA10548-8"},
      {"text": "-- Gastric Cancer", "code": "LA10547-0"},
      {"text": "-- Kidney Cancer", "code": "LA10541-3"},
      {"text": "-- Leukemia", "code": "LA10545-4"},
      {"text": "-- Lung Cancer", "code": "LA10542-1"},
      {"text": "-- Muscle Cancer", "code": "LA10546-2"},
      {"text": "-- Ovarian Cancer", "code": "LA10539-7"},
      {"text": "-- Prostate Cancer", "code": "LA10538-9"},
      {"text": "-- Skin Cancer", "code": "LA10543-9"},
      {"text": "-- Thyroid Cancer", "code": "LA10540-5"},
      {"text": "-- Uterine Cancer", "code": "LA10544-7"},
      {"text": "-- Other Cancer", "code": "LA10550-4"},
      {"text": "Diabetes", "code": "LA10529-8"},
      {"text": "-- Diabetes Type 1", "code": "LA10551-2"},
      {"text": "-- Diabetes Type 2", "code": "LA10552-0"},
      {"text": "-- Gestational Diabetes", "code": "LA10553-8"},
      {"text": "Gastrointestinal Disease", "code": "LA10532-2"},
      {"text": "-- Crohn's Disease", "code": "LA10554-6"},
      {"text": "-- Irritable Bowel Syndrome", "code": "LA10555-3"},
      {"text": "-- Ulceritive Colitis", "code": "LA10556-1"},
      {"text": "-- Colon Polyps", "code": "LA10557-9"},
      {"text": "Heart Disease", "code": "LA10523-1"},
      {"text": "-- Heart Attack", "code": "LA10558-7"},
      {"text": "High Cholesterol/Hyperlipidemia", "code": "LA10526-4"},
      {"text": "Hypertension", "code": "LA7444-8"},
      {"text": "Kidney Disease", "code": "LA10528-0"},
      {"text": "-- Cystic Kidney Disease", "code": "LA10565-2"},
      {"text": "-- Kidney Disease Present From Birth", "code": "LA10566-0"},
      {"text": "-- Nephrosis", "code": "LA10567-8"},
      {"text": "-- Nephritis", "code": "LA10568-6"},
      {"text": "-- Nephrotic Syndrome", "code": "LA10569-4"},
      {"text": "-- Diabetic Kidney Disease", "code": "LA10570-2"},
      {"text": "-- Other/Unknown", "code": "LA10571-0"},
      {"text": "Lung Disease", "code": "LA10531-4"},
      {"text": "-- COPD", "code": "LA10559-5"},
      {"text": "-- Chronic Bronchitis", "code": "LA10560-3"},
      {"text": "-- Emphysema", "code": "LA10561-1"},
      {"text": "-- Chronic Lower Respiratory Disease", "code": "LA10562-9"},
      {"text": "-- Influenza/Pneumonia", "code": "LA10563-7"},
      {"text": "-- Asthma", "code": "LA10564-5"},
      {"text": "Neurological Disorders", "code": "LA10590-0"},
      {"text": "Osteoporosis", "code": "LA10527-2"},
      {"text": "Psychological Disorders", "code": "LA10535-5"},
      {"text": "-- Anxiety", "code": "LA10574-4"},
      {"text": "-- Bipolar/Manic Depressive Disorder", "code": "LA10575-1"},
      {"text": "-- Depression", "code": "LA10576-9"},
      {"text": "-- Attention Deficit Hyper Activity", "code": "LA10577-7"},
      {"text": "-- Autism", "code": "LA10578-5"},
      {"text": "-- Personality Disorder", "code": "LA10579-3"},
      {"text": "-- Eating Disorder", "code": "LA10580-1"},
      {"text": "-- Obsessive Compulsive Disorder", "code": "LA10581-9"},
      {"text": "-- Panic Disorder", "code": "LA10582-7"},
      {"text": "-- Post Traumatic Stress Disorder", "code": "LA10583-5"},
      {"text": "-- Schizophrenia", "code": "LA10584-3"},
      {"text": "-- Social Phobia", "code": "LA10585-0"},
      {"text": "-- Dementia", "code": "LA10586-8"},
      {"text": "Septicemia", "code": "LA10591-8"},
      {"text": "Stroke/Brain Attack", "code": "LA10522-3"},
      {"text": "Sudden Infant Death Syndrome", "code": "LA10530-6"},
      {"text": "Cause of Death", "code": "LA10595-9"},
      {"text": "-- Suicide", "code": "LA10587-6"},
      {"text": "-- Accidental Death", "code": "LA10588-4"},
      {"text": "-- Other/Unexpected", "code": "LA10589-2", "other": "Please Specify"}
    ]
  }
};


/**
 * Expected form definition data from a repository, supporting horizontal table layout
 */
var horizontalFHTData = {
  // this is an example showing the JSON format based on the US Surgeon General family health portrait.
  // form type, required. Other possible types: "SDC"
  type: "LOINC",
  // form code, required, the top-level LOINC item's LOINC code in a panel is listed here.
  code: "54127-6H",
  // form name, required. the top-level LOINC item's name in a panel is listed here.
  name: "USSG-FHT, (with mock-up items for horizontal layout demo)",
  // predefined template name. optional, if not provided, a default template will be used for certain form "type"
  template: "panelTableH",
  // template configuration data. optional, if not provided, a default configuration will be used for the selected
  // template. the format/content is not ready for publish yet.
  templateOption: {},
  // question items, required
  items: [
    {"questionCode": "54126-8", "parentQuestionCode": "", "questionCardinality": {"min": 1, "max": 1}, "question": "Your health information", "answers": "", "dataType": "", "units": "", "header": true},
    {"questionCode": "54125-0", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Name", "answers": "", "dataType": "ST", "units": "", "header": false},
    {"questionCode": "54131-8", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Gender", "answers": 622, "answerCardinality": {"min": 1, "max": 1}, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "21112-8", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Date of Birth", "answers": "", "dataType": "DT", "units": "", "header": false},
    {"questionCode": "54132-6", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Were you born a twin?", "answers": 623, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54128-4", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Were you adopted?", "answers": 361, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54135-9", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Are your parents related to each other in any way other than marriage?", "answers": 361, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "8302-2", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Height", "answerCardinality": {"min": 1, "max": 1},"codingInstructions": "Try to type 10, 12, 15, 16, 25", "answers": "", "dataType": "REAL", "units": [
      {"name": "inches", "default": true},
      {"name": "centimeters"}
    ], "header": false, "skipLogic": [
      {"trigger": {"value": 12}, "action": "show", "targets": ["8302-2X"]},
      {"trigger": {"minInclusive": 10}, "action": "show", "targets": ["8302-2Y"]},
      {"trigger": {"minExclusive": 15, "maxInclusive": 20}, "action": "show", "targets": ["8302-2Z"]}
    ]},
    {"questionCode": "8302-2X", "parentQuestionCode": "8302-2", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: Shown when Height is 12", "answers": "", "dataType": "REAL", "units": "", "header": false},
    {"questionCode": "8302-2Y", "parentQuestionCode": "8302-2", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: Shown when Height >= 10", "answers": "", "dataType": "REAL", "units": "", "header": false},
    {"questionCode": "8302-2Z", "parentQuestionCode": "8302-2", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: Shown when Height >15 and Height <= 20", "answers": "", "dataType": "REAL", "units": "", "header": false},
    {"questionCode": "29463-7", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Weight", "answers": "", "dataType": "REAL", "units": [
      {"name": "lbs", "default": true},
      {"name": "kgs"}
    ], "header": false},
    {"questionCode": "39156-5", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: Body mass index (BMI) [Ratio]", "answers": "", "dataType": "", "units": "", "header": false, "formula":{"name":"BMI","value":["29463-7","8302-2"]}},
    {"questionCode": "54134-2", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Race", "answerCardinality": {"min": 0, "max": -1}, "answers": 629, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54133-4", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": 1}, "question": "Ethnicity", "answerCardinality": {"min": 0, "max": -1}, "answers": 628, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54137-5", "parentQuestionCode": "54126-8", "questionCardinality": {"min": 1, "max": -1}, "question": "Your diseases history", "answers": "", "dataType": "", "units": "", "header": true},
    {"questionCode": "54140-9", "parentQuestionCode": "54137-5", "questionCardinality": {"min": 1, "max": 1}, "question": "Disease or Condition", "answers": 626, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54130-0", "parentQuestionCode": "54137-5", "questionCardinality": {"min": 1, "max": 1}, "question": "Age at Diagnosis", "answers": 619, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54114-4", "parentQuestionCode": "", "questionCardinality": {"min": 1, "max": -1}, "question": "Family member health information", "answers": "", "dataType": "", "units": "", "header": true},
    {"questionCode": "54136-7", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": 1}, "question": "Relationship to you", "answers": 621, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54138-3", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": 1}, "question": "Name", "answers": "", "dataType": "ST", "units": "", "header": false},
    {"questionCode": "54123-5", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": 1}, "question": "Gender", "answers": 622, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54139-1", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": 1}, "question": "Living?", "answers": 624, "dataType": "CNE", "units": "", "header": false, "skipLogic": [
      {"trigger": {"code": "LA33-6"}, "action": "show", "targets": ["54124-3", "54141-7"]},
      {"trigger": {"code": "LA32-8"}, "action": "show", "targets": ["54112-8", "54113-6"]}
    ]},
    {"questionCode": "54124-3", "parentQuestionCode": "54139-1", "questionCardinality": {"min": 1, "max": 1}, "question": "Date of Birth", "answers": "", "dataType": "DT", "units": "", "header": false},
    {"questionCode": "54141-7", "parentQuestionCode": "54139-1", "questionCardinality": {"min": 1, "max": 1}, "question": "Age", "answers": "", "dataType": "REAL", "units": "", "header": false},
    {"questionCode": "54112-8", "parentQuestionCode": "54139-1", "questionCardinality": {"min": 1, "max": 1}, "question": "Cause of Death", "answers": 627, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54113-6", "parentQuestionCode": "54139-1", "questionCardinality": {"min": 1, "max": 1}, "question": "Age at Death", "answers": 619, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54121-9", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": 1}, "question": "Was this person born a twin?", "answers": 623, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54122-7", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": 1}, "question": "Was this person adopted?", "answers": 361, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54119-3", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": 1}, "question": "Race", "answerCardinality": {"min": 0, "max": -1}, "answers": 629, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54120-1", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": 1}, "question": "Ethnicity", "answerCardinality": {"min": 0, "max": -1}, "answers": 628, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "54117-7", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": -1}, "question": "This family member's history of disease", "answers": "", "dataType": "", "units": "", "header": true, "layout": "horizontal"},
    {"questionCode": "54116-9", "parentQuestionCode": "54117-7", "questionCardinality": {"min": 1, "max": 1}, "question": "Disease or Condition", "answers": 626, "dataType": "CNE", "units": "", "header": false, "answerCardinality": {"min": 1, "max": 1} },
    {"questionCode": "54115-1", "parentQuestionCode": "54117-7", "questionCardinality": {"min": 1, "max": 1}, "question": "Age at Diagnosis", "answers": 619, "dataType": "CNE", "units": "", "header": false},
//    {"questionCode": "54119-3N", "parentQuestionCode": "54117-7", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: Race", "answerCardinality": {"min": 0, "max": -1}, "answers": 629, "dataType": "CNE", "units": "", "header": false},
    {"questionCode": "8302-2", "parentQuestionCode": "54117-7", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: Height", "codingInstructions": "Try to type 10, 12, 15, 16, 25", "answers": "", "dataType": "REAL", "units": [
      {"name": "inches", "default": true},
      {"name": "centimeters"}
    ], "header": false, "skipLogic": [
//      {"trigger": {"value": 12}, "action": "show", "targets": ["8302-2X"]},
//      {"trigger": {"minInclusive": 10}, "action": "show", "targets": ["8302-2Y"]}
    ]},
//    {"questionCode": "8302-2X", "parentQuestionCode": "8302-2", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: Shown when Height is 12", "answers": "", "dataType": "REAL", "units": "", "header": false},
//    {"questionCode": "8302-2Y", "parentQuestionCode": "8302-2", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: Shown when Height >= 10", "answers": "", "dataType": "REAL", "units": "", "header": false},
    {"questionCode": "29463-7", "parentQuestionCode": "54117-7", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: Weight", "answers": "", "dataType": "REAL", "units": [
      {"name": "lbs", "default": true},
      {"name": "kgs"}
    ], "header": false},
    {"questionCode": "39156-5", "parentQuestionCode": "54117-7", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: BMI", "answers": "", "dataType": "REAL", "units": "", "header": false, "formula":{"name":"BMI","value":["29463-7","8302-2"]}},

    {"questionCode": "54119-3R", "parentQuestionCode": "54114-4", "questionCardinality": {"min": 1, "max": 1}, "question": "Mock-up item: Race", "answerCardinality": {"min": 0, "max": -1}, "answers": 629, "dataType": "CNE", "units": "", "header": false},
  ],

  // answer list could be embedded directly in the "answers" field in "items", or,
  // all answer lists could be merged together in a separate "answerLists" object by creating an answer list id for
  // each list, as listed below, so that duplicated answer lists only need to be included once.
  answerLists: {
    "622": [
      {"text": "Male", "code": "LA2-8"},
      {"text": "Female", "code": "LA3-6"},
      {"text": "Other", "code": "LA46-8", "other": "Please Specify"}
    ],
    "623": [
      {"text": "Yes - Identical (Same)", "code": "LA10427-5", "label": "A"},
      {"text": "Yes - Fraternal (Different)", "code": "LA10428-3", "label": "B"},
      {"text": "No", "code": "LA32-8", "label": "C"}
    ],
    "361": [
      {"text": "Yes", "code": "LA33-6"},
      {"text": "No", "code": "LA32-8"}
    ],
    "629": [
      {"text": "American  Indian or Alaska Native", "code": "LA10608-0"},
      {"text": "Asian", "code": "LA6156-9"},
      {"text": "-- Asian Indian", "code": "LA10614-8"},
      {"text": "-- Chinese", "code": "LA10615-5"},
      {"text": "-- Filipino", "code": "LA10616-3"},
      {"text": "-- Japanese", "code": "LA10617-1"},
      {"text": "-- Korean", "code": "LA10618-9"},
      {"text": "-- Vietnamese", "code": "LA10620-5"},
      {"text": "-- Other Asian", "code": "LA10619-7"},
      {"text": "Black or African American", "code": "LA10610-6"},
      {"text": "Native Hawaiian or Other Pacific Islander", "code": "LA10611-4"},
      {"text": "-- Native Hawaiian", "code": "LA10623-9"},
      {"text": "-- Guamanian", "code": "LA10622-1"},
      {"text": "-- Chamorro", "code": "LA10621-3"},
      {"text": "-- Samoan", "code": "LA10625-4"},
      {"text": "-- Other Pacific Islander", "code": "LA10624-7"},
      {"text": "White", "code": "LA4457-3"},
      {"text": "Other/Unknown/Refuse To Answer", "code": "LA10613-0"}
    ],
    "628": [
      {"text": "Hispanic or Latino", "code": "LA6214-6"},
      {"text": "-- Central American", "code": "LA10599-1"},
      {"text": "-- Cuban", "code": "LA10600-7"},
      {"text": "-- Dominican(Republic)", "code": "LA10601-5"},
      {"text": "-- Mexican", "code": "LA10602-3"},
      {"text": "-- Puerto Rican", "code": "LA10605-6"},
      {"text": "-- South American", "code": "LA10606-4"},
      {"text": "-- Other Latin American", "code": "LA10604-9"},
      {"text": "-- Other Hispanic/Latino/Spanish", "code": "LA10603-1"},
      {"text": "Non-Hispanic or Latino", "code": "LA10597-5"},
      {"text": "Ashkenazi Jewish", "code": "LA10598-3"},
      {"text": "Unknown/No answer", "code": "LA10607-2"}
    ],
    "626": [
      {"text": "Blood Clots", "code": "LA10533-0"},
      {"text": "-- Blood Clot in Leg", "code": "LA10572-8"},
      {"text": "-- Blood Clot in Lungs", "code": "LA10573-6"},
      {"text": "Cancer", "code": "LA10524-9"},
      {"text": "-- Bone", "code": "LA10549-6"},
      {"text": "-- Breast Cancer", "code": "LA10536-3"},
      {"text": "-- Colon Cancer", "code": "LA10537-1"},
      {"text": "-- Esophageal Cancer", "code": "LA10548-8"},
      {"text": "-- Gastric Cancer", "code": "LA10547-0"},
      {"text": "-- Kidney Cancer", "code": "LA10541-3"},
      {"text": "-- Leukemia", "code": "LA10545-4"},
      {"text": "-- Lung Cancer", "code": "LA10542-1"},
      {"text": "-- Muscle Cancer", "code": "LA10546-2"},
      {"text": "-- Ovarian Cancer", "code": "LA10539-7"},
      {"text": "-- Prostate Cancer", "code": "LA10538-9"},
      {"text": "-- Skin Cancer", "code": "LA10543-9"},
      {"text": "-- Thyroid Cancer", "code": "LA10540-5"},
      {"text": "-- Uterine Cancer", "code": "LA10544-7"},
      {"text": "-- Other Cancer", "code": "LA10550-4"},
      {"text": "Diabetes", "code": "LA10529-8"},
      {"text": "-- Diabetes Type 1", "code": "LA10551-2"},
      {"text": "-- Diabetes Type 2", "code": "LA10552-0"},
      {"text": "-- Gestational Diabetes", "code": "LA10553-8"},
      {"text": "Gastrointestinal Disease", "code": "LA10532-2"},
      {"text": "-- Crohn's Disease", "code": "LA10554-6"},
      {"text": "-- Irritable Bowel Syndrome", "code": "LA10555-3"},
      {"text": "-- Ulceritive Colitis", "code": "LA10556-1"},
      {"text": "-- Colon Polyps", "code": "LA10557-9"},
      {"text": "Heart Disease", "code": "LA10523-1"},
      {"text": "-- Heart Attack", "code": "LA10558-7"},
      {"text": "High Cholesterol/Hyperlipidemia", "code": "LA10526-4"},
      {"text": "Hypertension", "code": "LA7444-8"},
      {"text": "Kidney Disease", "code": "LA10528-0"},
      {"text": "-- Cystic Kidney Disease", "code": "LA10565-2"},
      {"text": "-- Kidney Disease Present From Birth", "code": "LA10566-0"},
      {"text": "-- Nephrosis", "code": "LA10567-8"},
      {"text": "-- Nephritis", "code": "LA10568-6"},
      {"text": "-- Nephrotic Syndrome", "code": "LA10569-4"},
      {"text": "-- Diabetic Kidney Disease", "code": "LA10570-2"},
      {"text": "-- Other/Unknown", "code": "LA10571-0"},
      {"text": "Lung Disease", "code": "LA10531-4"},
      {"text": "-- COPD", "code": "LA10559-5"},
      {"text": "-- Chronic Bronchitis", "code": "LA10560-3"},
      {"text": "-- Emphysema", "code": "LA10561-1"},
      {"text": "-- Chronic Lower Respiratory Disease", "code": "LA10562-9"},
      {"text": "-- Influenza/Pneumonia", "code": "LA10563-7"},
      {"text": "-- Asthma", "code": "LA10564-5"},
      {"text": "Neurological Disorders", "code": "LA10590-0"},
      {"text": "Osteoporosis", "code": "LA10527-2"},
      {"text": "Psychological Disorders", "code": "LA10535-5"},
      {"text": "-- Anxiety", "code": "LA10574-4"},
      {"text": "-- Bipolar/Manic Depressive Disorder", "code": "LA10575-1"},
      {"text": "-- Depression", "code": "LA10576-9"},
      {"text": "-- Attention Deficit Hyper Activity", "code": "LA10577-7"},
      {"text": "-- Autism", "code": "LA10578-5"},
      {"text": "-- Personality Disorder", "code": "LA10579-3"},
      {"text": "-- Eating Disorder", "code": "LA10580-1"},
      {"text": "-- Obsessive Compulsive Disorder", "code": "LA10581-9"},
      {"text": "-- Panic Disorder", "code": "LA10582-7"},
      {"text": "-- Post Traumatic Stress Disorder", "code": "LA10583-5"},
      {"text": "-- Schizophrenia", "code": "LA10584-3"},
      {"text": "-- Social Phobia", "code": "LA10585-0"},
      {"text": "-- Dementia", "code": "LA10586-8"},
      {"text": "Septicemia", "code": "LA10591-8"},
      {"text": "Stroke/Brain Attack", "code": "LA10522-3"},
      {"text": "Sudden Infant Death Syndrome", "code": "LA10530-6"}
    ],
    "619": [
      {"text": "Pre-Birth", "code": "LA10402-8"},
      {"text": "Newborn", "code": "LA10403-6"},
      {"text": "Infancy", "code": "LA10394-7"},
      {"text": "Childhood", "code": "LA10395-4"},
      {"text": "Adolescence", "code": "LA10404-4"},
      {"text": "20-29", "code": "LA10396-2"},
      {"text": "30-39", "code": "LA10397-0"},
      {"text": "40-49", "code": "LA10398-8"},
      {"text": "50-59", "code": "LA10399-6"},
      {"text": "OVER 60", "code": "LA10400-2"},
      {"text": "Unknown", "code": "LA4489-6"}
    ],
    "621": [
      {"text": "Daughter", "code": "LA10405-1"},
      {"text": "Granddaughter", "code": "LA10406-9"},
      {"text": "Grandson", "code": "LA10407-7"},
      {"text": "Half-brother", "code": "LA10408-5"},
      {"text": "Half-sister", "code": "LA10409-3"},
      {"text": "Maternal Aunt", "code": "LA10410-1"},
      {"text": "Maternal Cousin", "code": "LA10411-9"},
      {"text": "Maternal Grandfather", "code": "LA10412-7"},
      {"text": "Maternal Grandmother", "code": "LA10413-5"},
      {"text": "Maternal Uncle", "code": "LA10414-3"},
      {"text": "Brother", "code": "LA10415-0"},
      {"text": "Father", "code": "LA10416-8"},
      {"text": "Mother", "code": "LA10417-6"},
      {"text": "Sister", "code": "LA10418-4"},
      {"text": "Nephew", "code": "LA10419-2"},
      {"text": "Niece", "code": "LA10420-0"},
      {"text": "Paternal Aunt", "code": "LA10421-8"},
      {"text": "Paternal Cousin", "code": "LA10422-6"},
      {"text": "Paternal Grandfather", "code": "LA10423-4"},
      {"text": "Paternal Grandmother", "code": "LA10424-2"},
      {"text": "Paternal Uncle", "code": "LA10425-9"},
      {"text": "Son", "code": "LA10426-7"}
    ],
    "624": [
      {"text": "Yes", "code": "LA33-6"},
      {"text": "No", "code": "LA32-8"},
      {"text": "Unknown", "code": "LA4489-6"}
    ],
    "627": [
      {"text": "Blood Clots", "code": "LA10533-0"},
      {"text": "-- Blood Clot in Leg", "code": "LA10572-8"},
      {"text": "-- Blood Clot in Lungs", "code": "LA10573-6"},
      {"text": "Cancer", "code": "LA10524-9"},
      {"text": "-- Bone", "code": "LA10549-6"},
      {"text": "-- Breast Cancer", "code": "LA10536-3"},
      {"text": "-- Colon Cancer", "code": "LA10537-1"},
      {"text": "-- Esophageal Cancer", "code": "LA10548-8"},
      {"text": "-- Gastric Cancer", "code": "LA10547-0"},
      {"text": "-- Kidney Cancer", "code": "LA10541-3"},
      {"text": "-- Leukemia", "code": "LA10545-4"},
      {"text": "-- Lung Cancer", "code": "LA10542-1"},
      {"text": "-- Muscle Cancer", "code": "LA10546-2"},
      {"text": "-- Ovarian Cancer", "code": "LA10539-7"},
      {"text": "-- Prostate Cancer", "code": "LA10538-9"},
      {"text": "-- Skin Cancer", "code": "LA10543-9"},
      {"text": "-- Thyroid Cancer", "code": "LA10540-5"},
      {"text": "-- Uterine Cancer", "code": "LA10544-7"},
      {"text": "-- Other Cancer", "code": "LA10550-4"},
      {"text": "Diabetes", "code": "LA10529-8"},
      {"text": "-- Diabetes Type 1", "code": "LA10551-2"},
      {"text": "-- Diabetes Type 2", "code": "LA10552-0"},
      {"text": "-- Gestational Diabetes", "code": "LA10553-8"},
      {"text": "Gastrointestinal Disease", "code": "LA10532-2"},
      {"text": "-- Crohn's Disease", "code": "LA10554-6"},
      {"text": "-- Irritable Bowel Syndrome", "code": "LA10555-3"},
      {"text": "-- Ulceritive Colitis", "code": "LA10556-1"},
      {"text": "-- Colon Polyps", "code": "LA10557-9"},
      {"text": "Heart Disease", "code": "LA10523-1"},
      {"text": "-- Heart Attack", "code": "LA10558-7"},
      {"text": "High Cholesterol/Hyperlipidemia", "code": "LA10526-4"},
      {"text": "Hypertension", "code": "LA7444-8"},
      {"text": "Kidney Disease", "code": "LA10528-0"},
      {"text": "-- Cystic Kidney Disease", "code": "LA10565-2"},
      {"text": "-- Kidney Disease Present From Birth", "code": "LA10566-0"},
      {"text": "-- Nephrosis", "code": "LA10567-8"},
      {"text": "-- Nephritis", "code": "LA10568-6"},
      {"text": "-- Nephrotic Syndrome", "code": "LA10569-4"},
      {"text": "-- Diabetic Kidney Disease", "code": "LA10570-2"},
      {"text": "-- Other/Unknown", "code": "LA10571-0"},
      {"text": "Lung Disease", "code": "LA10531-4"},
      {"text": "-- COPD", "code": "LA10559-5"},
      {"text": "-- Chronic Bronchitis", "code": "LA10560-3"},
      {"text": "-- Emphysema", "code": "LA10561-1"},
      {"text": "-- Chronic Lower Respiratory Disease", "code": "LA10562-9"},
      {"text": "-- Influenza/Pneumonia", "code": "LA10563-7"},
      {"text": "-- Asthma", "code": "LA10564-5"},
      {"text": "Neurological Disorders", "code": "LA10590-0"},
      {"text": "Osteoporosis", "code": "LA10527-2"},
      {"text": "Psychological Disorders", "code": "LA10535-5"},
      {"text": "-- Anxiety", "code": "LA10574-4"},
      {"text": "-- Bipolar/Manic Depressive Disorder", "code": "LA10575-1"},
      {"text": "-- Depression", "code": "LA10576-9"},
      {"text": "-- Attention Deficit Hyper Activity", "code": "LA10577-7"},
      {"text": "-- Autism", "code": "LA10578-5"},
      {"text": "-- Personality Disorder", "code": "LA10579-3"},
      {"text": "-- Eating Disorder", "code": "LA10580-1"},
      {"text": "-- Obsessive Compulsive Disorder", "code": "LA10581-9"},
      {"text": "-- Panic Disorder", "code": "LA10582-7"},
      {"text": "-- Post Traumatic Stress Disorder", "code": "LA10583-5"},
      {"text": "-- Schizophrenia", "code": "LA10584-3"},
      {"text": "-- Social Phobia", "code": "LA10585-0"},
      {"text": "-- Dementia", "code": "LA10586-8"},
      {"text": "Septicemia", "code": "LA10591-8"},
      {"text": "Stroke/Brain Attack", "code": "LA10522-3"},
      {"text": "Sudden Infant Death Syndrome", "code": "LA10530-6"},
      {"text": "Cause of Death", "code": "LA10595-9"},
      {"text": "-- Suicide", "code": "LA10587-6"},
      {"text": "-- Accidental Death", "code": "LA10588-4"},
      {"text": "-- Other/Unexpected", "code": "LA10589-2", "other": "Please Specify"}
    ]
  }
};

// A panel with score rule
var glasgow =
{ "type": "LOINC",
  "code": "35088-4B",
  "name": "Glasgow coma scale (with score rules)",
  "dataType": null,
  "header": true,
  "units": null,
  "codingInstructions": "The Glasgow Coma Scale is a neurological scale for assessing a person's level of consciousness, both for initial as well as continuing assessment. A patient is assessed against the criteria of the scale, and the resulting points give the Glasgow Coma Score (or GCS).",
  "copyrightNotice": null,
  "items": [
  {"questionCode": "9267-6", "localQuestionCode": null, "dataType": "CNE", "header": false, "units": null, "codingInstructions": null, "copyrightNotice": null, "questionCardinality": null, "answerCardinality": null, "question": "GCS eye", "answers": [
    {"label": "1", "code": "LA6553-7", "text": "No eye opening", "score": 1, "other": null},
    {"label": "2", "code": "LA6554-5", "text": "Eye opening to pain", "score": 2, "other": null},
    {"label": "3", "code": "LA6555-2", "text": "Eye opening to verbal command", "score": 3, "other": null},
    {"label": "4", "code": "LA6556-0", "text": "Eyes open spontaneously", "score": 4, "other": null}
  ], "skipLogic": null, "restrictions": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
  {"questionCode": "9268-4", "localQuestionCode": null, "dataType": "CNE", "header": false, "units": null, "codingInstructions": null, "copyrightNotice": null, "questionCardinality": null, "answerCardinality": null, "question": "GCS motor", "answers": [
    {"label": "1", "code": "LA6562-8", "text": "No motor response", "score": 1, "other": null},
    {"label": "2", "code": "LA6563-6", "text": "Extension to pain", "score": 2, "other": null},
    {"label": "3", "code": "LA6564-4", "text": "Flexion to pain", "score": 3, "other": null},
    {"label": "4", "code": "LA6565-1", "text": "Withdrawl from pain", "score": 4, "other": null},
    {"label": "5", "code": "LA6566-9", "text": "Localizing pain", "score": 5, "other": null},
    {"label": "6", "code": "LA6567-7", "text": "Obeys commands", "score": 6, "other": null}
  ], "skipLogic": null, "restrictions": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
  {"questionCode": "9270-0", "localQuestionCode": null, "dataType": "CNE", "header": false, "units": null, "codingInstructions": null, "copyrightNotice": null, "questionCardinality": null, "answerCardinality": null, "question": "GCS verbal", "answers": [
    {"label": "1", "code": "LA6557-8", "text": "No verbal response (>2 yrs); no vocal response (<=2 yrs)", "score": 1, "other": null},
    {"label": "2", "code": "LA6558-6", "text": "Incomprehensible sounds", "score": 2, "other": null},
    {"label": "3", "code": "LA6559-4", "text": "Inappropriate words", "score": 3, "other": null},
    {"label": "4", "code": "LA6560-2", "text": "Confused", "score": 4, "other": null},
    {"label": "5", "code": "LA6561-0", "text": "Oriented", "score": 5, "other": null}
  ], "skipLogic": null, "restrictions": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
  {"questionCode": "9269-2", "localQuestionCode": null, "dataType": null, "header": false, "units": [
    {"name": "{score}", "default": false, "normalRange": null, "absoluteRange": null}
  ], "codingInstructions": null, "copyrightNotice": null, "questionCardinality": null, "answerCardinality": null, "question": "GCS total", "answers": null, "skipLogic": null, "restrictions": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": {"name": "TOTALSCORE", "value":[]}, "items": null}
]};


var glasgowRI = 
{ "type":"LOINC",
  "code":"35088-4",
  "name":"Glasgow coma scale",
  "dataType":null,
  "header":true,
  "units":null,
  "codingInstructions":"The Glasgow Coma Scale is a neurological scale for assessing a person's level of consciousness, both for initial as well as continuing assessment. A patient is assessed against the criteria of the scale, and the resulting points give the Glasgow Coma Score (or GCS).",
  "copyrightNotice":null,
  "items":[
    {"questionCode":"9267-6","localQuestionCode":null,"dataType":null,"header":false,"units":null,"codingInstructions":null,"copyrightNotice":null,"questionCardinality":null,"answerCardinality":null,"question":"GCS eye",
      "answers":[
        {"label":"1","code":"LA6553-7","text":"No eye opening","score":1,"other":null},
        {"label":"2","code":"LA6554-5","text":"Eye opening to pain","score":2,"other":null},
        {"label":"3","code":"LA6555-2","text":"Eye opening to verbal command","score":3,"other":null},
        {"label":null,"code":"LA6556-0","text":"Eyes open spontaneously","score":4,"other":null}],
      "skipLogic":null,"restrictions":null,"editable":null,"defaultAnswer":null,"formatting":null,"calculationMethod":null,"items":null},
    {"questionCode":"9268-4","localQuestionCode":null,"dataType":null,"header":false,"units":null,"codingInstructions":null,"copyrightNotice":null,"questionCardinality":null,"answerCardinality":null,"question":"GCS motor",
      "answers":[
        {"label":"1","code":"LA6562-8","text":"No motor response","score":1,"other":null},
        {"label":"2","code":"LA6563-6","text":"Extension to pain","score":2,"other":null},
        {"label":"3","code":"LA6564-4","text":"Flexion to pain","score":3,"other":null},
        {"label":"4","code":"LA6565-1","text":"Withdrawl from pain","score":4,"other":null},
        {"label":"5","code":"LA6566-9","text":"Localizing pain","score":5,"other":null},
        {"label":"6","code":"LA6567-7","text":"Obeys commands","score":6,"other":null}],
      "skipLogic":null,"restrictions":null,"editable":null,"defaultAnswer":null,"formatting":null,"calculationMethod":null,"items":null},
    {"questionCode":"9270-0","localQuestionCode":null,"dataType":null,"header":false,"units":null,"codingInstructions":null,"copyrightNotice":null,"questionCardinality":null,"answerCardinality":null,"question":"GCS verbal",
      "answers":[
        {"label":"1","code":"LA6557-8","text":"No verbal response (>2 yrs); no vocal response (<=2 yrs)","score":1,"other":null},
        {"label":"2","code":"LA6558-6","text":"Incomprehensible sounds","score":2,"other":null},
        {"label":"3","code":"LA6559-4","text":"Inappropriate words","score":3,"other":null},
        {"label":"4","code":"LA6560-2","text":"Confused","score":4,"other":null},
        {"label":"5","code":"LA6561-0","text":"Oriented","score":5,"other":null}],
      "skipLogic":null,"restrictions":null,"editable":null,"defaultAnswer":null,"formatting":null,"calculationMethod":null,"items":null},
    {"questionCode":"9269-2","localQuestionCode":null,"dataType":null,"header":false,"units":[{"name":"{score}","default":false,"normalRange":null,"absoluteRange":null}],"codingInstructions":null,"copyrightNotice":null,"questionCardinality":null,"answerCardinality":null,"question":"GCS total","answers":null,"skipLogic":null,"restrictions":null,"editable":null,"defaultAnswer":null,"formatting":null,"calculationMethod":"TOTALSCORE","items":null}]};


var formBuilder =
{
  "type": "LOINC",
  "code": "formC",
  "name": "Define LForm",
  "items": [
    {
    "questionCode": "codingSystemC",
    "question": "Coding System",
    "dataType": "CNE",
    "answers": "codingSystemC",
    "header": false
  },
    {
    "questionCode": "questionHeaderC",
    "question": "Question",
    "header": true,
    "items": [
      {
      "questionCode": "questionC",
      "question": "Label",
      "dataType": "ST",
      "header": false
    },
      {
      "questionCode": "questionCardinalityC",
      "question": "Question cardinality",
      "header": true,
      "items": [{
        "questionCode": "minC",
        "question": "Minimum",
        "dataType": "INT",
        "header": false
      }]
    },
      {
      "questionCode": "answersC",
      "question": "Build answer list",
      "header": true,
      "items": [{
        "questionCode": "textC",
        "question": "Answer text",
        "dataType": "ST",
        "header": false
      }]
    }, {
      "questionCode": "formulaC",
      "question": "Formula",
      "dataType": "ST",
      "header": false
    }]
  }]
};

var allInOne =
{ "type": "LOINC",
  "code": "all-in-one",
  "name": "Full-Featured Demo",
  "dataType": null,
  "header": null,
  "units": null,
  "codingInstructions": "NIH/NLM/LHNCBC",
  "copyrightNotice": null,
  "items": [
    // different data type
    {"questionCode": "type0", "dataType": "", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With empty data type", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type1", "dataType": "BL", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type BL", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type2", "dataType": "INT", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type INT", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type3", "dataType": "REAL", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type REAL", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type4", "dataType": "ST", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type ST", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type5", "dataType": "BIN", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type BIN", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type6", "dataType": "DT", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type DT", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type7", "dataType": "DTM", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type DTM", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type8", "dataType": "TM", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type TM", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type9", "dataType": "CNE", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type CNE", "answers": [
      {"code": "c1", "text": "Answer 1", "other": null},
      {"code": "c2", "text": "Answer 2", "other": null},
      {"code": "c3", "text": "Answer 3", "other": null},
      {"code": "c4", "text": "Other:", "other": true}],
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type10", "dataType": "CWE", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type CWE", "answers": [
      {"label": "1", "code": "c01", "text": "With a label 1", "score": 1, "other": null},
      {"label": "2", "code": "c02", "text": "With a label 2", "score": 2, "other": null},
      {"label": "3", "code": "c03", "text": "With a label 3", "score": 3, "other": null}],
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type11", "dataType": "RTO", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type RTO", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type12", "dataType": "QTY", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type QTY", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type13", "dataType": "YEAR", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type YEAR", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type14", "dataType": "MONTH", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type MONTH", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type15", "dataType": "DAY", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type DAY", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type16", "dataType": "URL", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type URL", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type17", "dataType": "EMAIL", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type EMAIL", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "type18", "dataType": "PHONE", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "With data type PHONE", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},

    // multi-select CNE
    {"questionCode": "multiSelectCNE", "dataType": "CNE", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": {"min": "0", "max": "-1"}, "question": "Multi Selection on CNE", "answers": [
      {"code": "c1", "text": "Answer 1"},
      {"code": "c2", "text": "Answer 2"},
      {"code": "c3", "text": "Answer 3"},
      {"code": "c4", "text": "Answer 4"}],
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    // multi-select CWE
    {"questionCode": "multiSelectCWE", "dataType": "CWE", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": {"min": "0", "max": "-1"}, "question": "Multi Selection on CWE", "answers": [
      {"code": "c1", "text": "Answer 1"},
      {"code": "c2", "text": "Answer 2"},
      {"code": "c3", "text": "Answer 3"},
      {"code": "c4", "text": "Answer 4"}],
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},


    // skip logic, controlling sibling items
    // skip logic, controlling sibling headers
    {"questionCode": "slSource1", "dataType": "INT", "header": false, "units": null, "codingInstructions": "1 to show T1; >=2 to show T2; <=5 to show header T3, and its subitmes T4 and T5.",
      "questionCardinality": null, "answerCardinality": null, "question": "Skip Logic Source #1", "answers": null,
      "skipLogic": [
          {"trigger": {"value": 1}, "action": "show", "targets": ["slTargetItem1"]},
          {"trigger": {"minInclusive": 2}, "action": "show", "targets": ["slTargetItem2"]},
          // targets includes a header and all its children, just for testing of a temp solution that make skip logic work on sections
          // only headers are needed in future.
          {"trigger": {"maxInclusive": 5}, "action": "show", "targets": ["slTargetHeader1","slTargetSubItem1","slTargetSubItem2"]},
//        {"trigger": {"maxInclusive": 5}, "action": "show", "targets": ["slTargetHeader1"]},
//        {"trigger": {"minExclusive": 6}, "action": "show", "targets": ["slTargetSubItem3"]}   // child of a sibling, not allowed
      ],
      "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "slTargetItem1", "dataType": "INT", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "T1: Shown when 'Skip Logic Source #1' == 1", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "slTargetItem2", "dataType": "INT", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "T2: Shown when 'Skip Logic Source #1' > 1", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "slTargetHeader1", "dataType": "", "header": true, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "T3: Shown when 'Skip Logic Source #1' <= 5", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "slTargetSubItem1", "parentQuestionCode": "slTargetHeader1", "dataType": "INT", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "T4: Shown when my section header is shown", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
    {"questionCode": "slTargetSubItem2", "parentQuestionCode": "slTargetHeader1", "dataType": "INT", "header": false, "units": null, "codingInstructions": null,
      "questionCardinality": null, "answerCardinality": null, "question": "T5: Shown when my section header is shown", "answers": null,
      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},
//    {"questionCode": "slTargetSubItem3", "parentQuestionCode": "slTargetHeader1", "dataType": "INT", "header": false, "units": null, "codingInstructions": null,
//      "questionCardinality": null, "answerCardinality": null, "question": "T6: Hidden when my section header is hidden, even if I am told to show when 'Skip Logic Source #1' > 6", "answers": null,
//      "skipLogic": null, "editable": null, "defaultAnswer": null, "formatting": null, "formula": null, "items": null},

    // skip logic, controlling child items and headers (one level below)
    // skip logic, controlling descendant items and headers (two levels below)

    // skip logic, controlling repeating sibling items
    // skip logic, controlling repeating sibling headers
    // skip logic, controlling repeating child items and headers (one level below)
    // skip logic, controlling repeating descendant items and headers (two levels below)

    // skip logic, one instance of repeating item (as source) controlling sibling items/headers and descendants items/headers

    // skip logic, one instance of repeating item (as source) controlling repeating sibling items/headers and repeating descendant items/headers

    // editable: readonly(0), writable(1), or readonly for existing data, writable for new data(2)


    // repeating items on level 1
    // bmi rule

    // level 2 sub section 1, non-repeating -- a
    // repeating items on level 2
    // skip logic rule

    // level 3 sub section 1, non-repeating ---- aa
    // repeating items on level 3
    // answers,
    // multiple answers
    // skip logic rule
    // bmi rule

    // level 3 sub section 2, repeating, with everything in (aa) ---- ab

    // level 2 sub section 2, repeating, with everything in (a) -- b

    // total score

  ]};
