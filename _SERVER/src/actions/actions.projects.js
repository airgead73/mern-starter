const asyncHandler = require('../middleware/handleAsync');
const Project = require('../models/Project');

/**
 * @route   POST /api/projects
 * @desc    create 
 * @access  private
 */

exports.create = asyncHandler(async function(req, res, next) {
  const project = new Project(req.body);
  await project.save();

  return res
    .status(200)
    .json({
      success: true,
      message: 'Project has been added.',
      results: project
    });
});

/**
 * @route   GET /api/projects
 * @desc    read 
 * @access  private
 */

exports.read = asyncHandler(async function(req, res, next) {
  const projects = await Project.find();
  return res
    .status(200)
    .json({
      success: true,
      message: 'Projects found.',
      count: projects.length,
      results: projects
    });  
});

/**
 * @route   GET /api/projects/:projectID
 * @desc    read one 
 * @access  private
 */

exports.read_one = asyncHandler(async function(req, res, next) {
  const project = await Project.findById(req.params.projectID);

  if(project) {
    return res
    .status(200)
    .json({
      success: true,
      message: 'Projects found.',
      results: project
    });    
  } 

});

/**
 * @route   PUT /api/projects/:projectID
 * @desc    update project 
 * @access  private
 */

exports.update = asyncHandler(async function(req, res, next) {
  res.send('Update project');
});

/**
 * @route   DELETE /
 * @desc    delete project 
 * @access  private
 */

exports.delete_one = asyncHandler(async function(req, res, next) {
  res.send('Delete project');
});

/**
 * @route   DELETE /
 * @desc    delete all projects 
 * @access  private
 */

exports.delete_all = asyncHandler(async function(req, res, next) {
  res.send('Delete all projects');
});
