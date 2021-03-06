<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php foreach ($rows as $id => $row): ?>
	<?php if ($classes_array[$id]): ?>
	  <div<?php print ' class="' . $classes_array[$id] .'"'; ?>>
		<?php print $row; ?>
	  </div>
  <?php else: ?>
	<?php print $row; ?>
  <?php endif; ?>
<?php endforeach; ?>