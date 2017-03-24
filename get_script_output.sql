-- Used to create the JS files.
select
case when display_as = 'Select List' then '.select(''#'||item_name||''', put_value)'
     when display_as = 'Radio Group' then '.click(''#'||item_name||'_0'')' 
  else '.insert(''#'||item_name||''', put_value)'
end nightmare_script
from apex_application_page_items
where
application_id = :APP_ID
and page_id = :PAGE_ID
and item_source_type = 'Database Column'
and display_as != 'Hidden'
order by display_sequence asc;
