const asyncHandler = require('../middleware/handleAsync');
const Project = require('../models/Project');

/**
 * @route   POST /api/projects
 * @desc    create 
 * @access  private
 */

exports.create = asyncHandler(async function(req, res, next) {
  res.send('Create project');
});

/**
 * @route   GET /api/projects
 * @desc    read 
 * @access  private
 */

exports.read = asyncHandler(async function(req, res, next) {
  res.send('Read projects');
});

/**
 * @route   GET /api/projects/:projectID
 * @desc    read one 
 * @access  private
 */

exports.read_one = asyncHandler(async function(req, res, next) {
  res.send('Read project');
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
