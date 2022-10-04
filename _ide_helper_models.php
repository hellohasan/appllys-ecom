<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\AcademicClass
 *
 * @property int $id
 * @property string $name
 * @property string $code
 * @property int $type 0=Section,1=Group,2=Department
 * @property int $grading_id
 * @property bool $is_admission
 * @property bool $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\GradingSystem $grading
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicClass activated()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicClass newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicClass newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicClass query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicClass whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicClass whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicClass whereGradingId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicClass whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicClass whereIsAdmission($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicClass whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicClass whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicClass whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicClass whereUpdatedAt($value)
 */
	class AcademicClass extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\AcademicData
 *
 * @property int $id
 * @property string $custom
 * @property int $student_id
 * @property int $admission_id
 * @property int $academic_session_id
 * @property int $academic_class_id
 * @property int $academic_class_type
 * @property string $leveloneable_type
 * @property int $leveloneable_id
 * @property string|null $leveltwoable_type
 * @property int|null $leveltwoable_id
 * @property array|null $subjects
 * @property array|null $optional_subjects
 * @property int $status 0=Current,1=Passed,2=Graduate,3=Block
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData whereAcademicClassId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData whereAcademicClassType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData whereAcademicSessionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData whereAdmissionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData whereCustom($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData whereLeveloneableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData whereLeveloneableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData whereLeveltwoableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData whereLeveltwoableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData whereOptionalSubjects($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData whereStudentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData whereSubjects($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicData whereUpdatedAt($value)
 */
	class AcademicData extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\AcademicDepartment
 *
 * @property int $id
 * @property string $name
 * @property bool $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicDepartment newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicDepartment newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicDepartment query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicDepartment whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicDepartment whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicDepartment whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicDepartment whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicDepartment whereUpdatedAt($value)
 */
	class AcademicDepartment extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\AcademicExam
 *
 * @property int $id
 * @property string|null $custom
 * @property int $created_by
 * @property int $academic_session_id
 * @property string $title
 * @property string $start_date
 * @property string $end_date
 * @property bool $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\AcademicExamClass[] $classes
 * @property-read int|null $classes_count
 * @property-read \App\Models\User $creator
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\AcademicExamRoutine[] $routines
 * @property-read int|null $routines_count
 * @property-read \App\Models\AcademicSession $session
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExam newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExam newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExam query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExam whereAcademicSessionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExam whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExam whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExam whereCustom($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExam whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExam whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExam whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExam whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExam whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExam whereUpdatedAt($value)
 */
	class AcademicExam extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\AcademicExamClass
 *
 * @property int $id
 * @property int $academic_exam_id
 * @property int $academic_class_id
 * @property int $type
 * @property string $leveloneable_type
 * @property int $leveloneable_id
 * @property string|null $leveltwoable_type
 * @property int|null $leveltwoable_id
 * @property int $is_routine
 * @property int $is_publish
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\AcademicClass $academicClass
 * @property-read mixed $academic_detail
 * @property-read \Illuminate\Database\Eloquent\Model|\Eloquent $leveloneable
 * @property-read \Illuminate\Database\Eloquent\Model|\Eloquent $leveltwoable
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\AcademicExamResult[] $results
 * @property-read int|null $results_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\AcademicExamRoutine[] $routines
 * @property-read int|null $routines_count
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamClass newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamClass newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamClass query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamClass whereAcademicClassId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamClass whereAcademicExamId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamClass whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamClass whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamClass whereIsPublish($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamClass whereIsRoutine($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamClass whereLeveloneableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamClass whereLeveloneableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamClass whereLeveltwoableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamClass whereLeveltwoableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamClass whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamClass whereUpdatedAt($value)
 */
	class AcademicExamClass extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\AcademicExamMark
 *
 * @property int $id
 * @property string $custom
 * @property int $academic_session_id
 * @property int $academic_exam_id
 * @property int $academic_exam_class_id
 * @property int $academic_subject_id
 * @property int|null $created_by
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User|null $creator
 * @property-read \App\Models\AcademicExam $exam
 * @property-read \App\Models\AcademicExamClass $examClass
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\AcademicExamMarkLog[] $logs
 * @property-read int|null $logs_count
 * @property-read \App\Models\AcademicSession $session
 * @property-read \App\Models\AcademicSubject $subject
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMark newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMark newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMark query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMark whereAcademicExamClassId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMark whereAcademicExamId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMark whereAcademicSessionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMark whereAcademicSubjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMark whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMark whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMark whereCustom($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMark whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMark whereUpdatedAt($value)
 */
	class AcademicExamMark extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\AcademicExamMarkLog
 *
 * @property int $id
 * @property int $academic_exam_mark_id
 * @property int $academic_data_id
 * @property int $student_id
 * @property int $mark_type
 * @property int $attendance
 * @property float|null $written
 * @property float|null $mcq
 * @property float|null $practical
 * @property float|null $total
 * @property int|null $grading_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\AcademicData $academicData
 * @property-read \App\Models\GradingSystemPercent|null $grade
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMarkLog newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMarkLog newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMarkLog query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMarkLog whereAcademicDataId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMarkLog whereAcademicExamMarkId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMarkLog whereAttendance($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMarkLog whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMarkLog whereGradingId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMarkLog whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMarkLog whereMarkType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMarkLog whereMcq($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMarkLog wherePractical($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMarkLog whereStudentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMarkLog whereTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMarkLog whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamMarkLog whereWritten($value)
 */
	class AcademicExamMarkLog extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\AcademicExamResult
 *
 * @property int $id
 * @property int $academic_exam_id
 * @property int $academic_exam_class_id
 * @property int $academic_data_id
 * @property array|null $data
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\AcademicData $academicData
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamResult newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamResult newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamResult query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamResult whereAcademicDataId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamResult whereAcademicExamClassId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamResult whereAcademicExamId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamResult whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamResult whereData($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamResult whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamResult whereUpdatedAt($value)
 */
	class AcademicExamResult extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\AcademicExamRoutine
 *
 * @property int $id
 * @property int $academic_exam_id
 * @property int $academic_exam_class_id
 * @property int $academic_subject_id
 * @property int $academic_room_id
 * @property \Illuminate\Support\Carbon $exam_date
 * @property string $start_time
 * @property string $end_time
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\AcademicExamClass $examClass
 * @property-read \App\Models\AcademicRoom $room
 * @property-read \App\Models\AcademicSubject $subject
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamRoutine newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamRoutine newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamRoutine query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamRoutine whereAcademicExamClassId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamRoutine whereAcademicExamId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamRoutine whereAcademicRoomId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamRoutine whereAcademicSubjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamRoutine whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamRoutine whereEndTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamRoutine whereExamDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamRoutine whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamRoutine whereStartTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicExamRoutine whereUpdatedAt($value)
 */
	class AcademicExamRoutine extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\AcademicGroup
 *
 * @property int $id
 * @property string $name
 * @property bool $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicGroup newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicGroup newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicGroup query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicGroup whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicGroup whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicGroup whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicGroup whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicGroup whereUpdatedAt($value)
 */
	class AcademicGroup extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\AcademicPromotion
 *
 * @property int $id
 * @property string $custom
 * @property int $academic_session_id
 * @property int $academic_exam_id
 * @property int $academic_exam_class_id
 * @property int $promotion_type
 * @property int $to_academic_session
 * @property int $to_academic_class_id
 * @property int $to_academic_class_type
 * @property string $leveloneable_type
 * @property int $leveloneable_id
 * @property string|null $leveltwoable_type
 * @property int|null $leveltwoable_id
 * @property int $created_by
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion whereAcademicExamClassId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion whereAcademicExamId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion whereAcademicSessionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion whereCustom($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion whereLeveloneableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion whereLeveloneableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion whereLeveltwoableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion whereLeveltwoableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion wherePromotionType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion whereToAcademicClassId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion whereToAcademicClassType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion whereToAcademicSession($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicPromotion whereUpdatedAt($value)
 */
	class AcademicPromotion extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\AcademicRoom
 *
 * @property int $id
 * @property string $name
 * @property string $number
 * @property string $type
 * @property bool $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicRoom newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicRoom newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicRoom query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicRoom whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicRoom whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicRoom whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicRoom whereNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicRoom whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicRoom whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicRoom whereUpdatedAt($value)
 */
	class AcademicRoom extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\AcademicSection
 *
 * @property int $id
 * @property string $name
 * @property int $seat
 * @property bool $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSection newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSection newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSection query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSection whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSection whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSection whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSection whereSeat($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSection whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSection whereUpdatedAt($value)
 */
	class AcademicSection extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\AcademicSession
 *
 * @property int $id
 * @property string $title
 * @property string $code
 * @property string $start_year
 * @property string $end_year
 * @property string $duration
 * @property int $status
 * @property int $is_current
 * @property string $off_day
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSession newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSession newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSession query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSession whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSession whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSession whereDuration($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSession whereEndYear($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSession whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSession whereIsCurrent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSession whereOffDay($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSession whereStartYear($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSession whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSession whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSession whereUpdatedAt($value)
 */
	class AcademicSession extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\AcademicSubject
 *
 * @property int $id
 * @property int $academic_class_id
 * @property int $class_type 0=OnlySection,1=GroupSection,2=DepartmentYear
 * @property int|null $academic_group_id
 * @property int|null $academic_department_id
 * @property int|null $academic_year_id
 * @property string $name
 * @property string $code
 * @property int $mark_type 0=Written,1=WrittenMCQPractical,2=WrittenPractical
 * @property float $written
 * @property float $mcq
 * @property float $practical
 * @property int $subject_type 0=Compulsory,1=Optional
 * @property float $total_point
 * @property float $optional_point
 * @property string $religion NA=NotAvailable
 * @property string|null $online_url
 * @property int $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\AcademicClass $academicClass
 * @property-read \App\Models\AcademicDepartment|null $academicDepartment
 * @property-read \App\Models\AcademicGroup|null $academicGroup
 * @property-read \App\Models\AcademicYear|null $departmentYear
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereAcademicClassId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereAcademicDepartmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereAcademicGroupId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereAcademicYearId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereClassType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereMarkType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereMcq($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereOnlineUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereOptionalPoint($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject wherePractical($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereReligion($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereSubjectType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereTotalPoint($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicSubject whereWritten($value)
 */
	class AcademicSubject extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\AcademicYear
 *
 * @property int $id
 * @property string $name
 * @property int $seat
 * @property bool $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicYear newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicYear newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicYear query()
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicYear whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicYear whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicYear whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicYear whereSeat($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicYear whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AcademicYear whereUpdatedAt($value)
 */
	class AcademicYear extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Admission
 *
 * @property int $id
 * @property string $custom
 * @property int $academic_session_id
 * @property int $academic_class_id
 * @property int $academic_class_type
 * @property string|null $academic_id
 * @property string $leveloneable_type
 * @property int $leveloneable_id
 * @property string|null $leveltwoable_type
 * @property int|null $leveltwoable_id
 * @property int|null $optional_subject_id
 * @property array $student_info
 * @property array $address_info
 * @property array $parent_info
 * @property int $guardian_type
 * @property array $guardian_info
 * @property array $family_info
 * @property int $previous_institute
 * @property array $previous_info
 * @property bool $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\AcademicClass $academicClass
 * @property-read \App\Models\AcademicData|null $academicData
 * @property-read \Devfaysal\BangladeshGeocode\Models\District|null $district
 * @property-read \Devfaysal\BangladeshGeocode\Models\Division|null $division
 * @property-read \App\Models\User|null $guardian
 * @property-read \Illuminate\Database\Eloquent\Model|\Eloquent $leveloneable
 * @property-read \Illuminate\Database\Eloquent\Model|\Eloquent $leveltwoable
 * @property-read \App\Models\AcademicSubject|null $optionalSubject
 * @property-read \App\Models\AcademicSession $session
 * @property-read \Devfaysal\BangladeshGeocode\Models\Union|null $union
 * @property-read \Devfaysal\BangladeshGeocode\Models\Upazila|null $upazila
 * @method static \Database\Factories\AdmissionFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Admission newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Admission query()
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereAcademicClassId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereAcademicClassType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereAcademicId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereAcademicSessionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereAddressInfo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereCustom($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereFamilyInfo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereGuardianInfo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereGuardianType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereLeveloneableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereLeveloneableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereLeveltwoableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereLeveltwoableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereOptionalSubjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereParentInfo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission wherePreviousInfo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission wherePreviousInstitute($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereStudentInfo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereUpdatedAt($value)
 */
	class Admission extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\BasicSetting
 *
 * @property int $id
 * @property string $title
 * @property string|null $name
 * @property string $est
 * @property string $phone
 * @property string $email
 * @property string $address
 * @property string $copy_text
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting query()
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting whereCopyText($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting whereEst($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BasicSetting whereUpdatedAt($value)
 */
	class BasicSetting extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\ClassPeriod
 *
 * @property int $id
 * @property string $title
 * @property string $start
 * @property string $end
 * @property string $duration
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ClassPeriod newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ClassPeriod newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ClassPeriod query()
 * @method static \Illuminate\Database\Eloquent\Builder|ClassPeriod whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassPeriod whereDuration($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassPeriod whereEnd($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassPeriod whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassPeriod whereStart($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassPeriod whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassPeriod whereUpdatedAt($value)
 */
	class ClassPeriod extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\ClassRoutine
 *
 * @property int $id
 * @property int $academic_session_id
 * @property int $academic_class_id
 * @property int $class_type
 * @property string $leveloneable_type
 * @property int $leveloneable_id
 * @property string|null $leveltwoable_type
 * @property int|null $leveltwoable_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\AcademicClass $academicClass
 * @property-read \App\Models\AcademicSession $academicSession
 * @property-read \Illuminate\Database\Eloquent\Model|\Eloquent $leveloneable
 * @property-read \Illuminate\Database\Eloquent\Model|\Eloquent $leveltwoable
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ClassRoutineLog[] $logs
 * @property-read int|null $logs_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\TeacherSubject[] $teachers
 * @property-read int|null $teachers_count
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutine newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutine newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutine query()
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutine whereAcademicClassId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutine whereAcademicSessionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutine whereClassType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutine whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutine whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutine whereLeveloneableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutine whereLeveloneableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutine whereLeveltwoableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutine whereLeveltwoableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutine whereUpdatedAt($value)
 */
	class ClassRoutine extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\ClassRoutineLog
 *
 * @property int $id
 * @property int $class_routine_id
 * @property int $academic_subject_id
 * @property int $teacher_id
 * @property string $day
 * @property int $class_period_id
 * @property int|null $academic_room_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\AcademicSubject $academicSubject
 * @property-read \App\Models\ClassPeriod $period
 * @property-read \App\Models\AcademicRoom|null $room
 * @property-read \App\Models\ClassRoutine|null $routine
 * @property-read \App\Models\Teacher $teacher
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutineLog newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutineLog newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutineLog query()
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutineLog whereAcademicRoomId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutineLog whereAcademicSubjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutineLog whereClassPeriodId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutineLog whereClassRoutineId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutineLog whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutineLog whereDay($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutineLog whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutineLog whereTeacherId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClassRoutineLog whereUpdatedAt($value)
 */
	class ClassRoutineLog extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Designation
 *
 * @property int $id
 * @property string $title
 * @property bool $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Designation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Designation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Designation query()
 * @method static \Illuminate\Database\Eloquent\Builder|Designation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Designation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Designation whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Designation whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Designation whereUpdatedAt($value)
 */
	class Designation extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\GradingSystem
 *
 * @property int $id
 * @property string $name
 * @property bool $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\GradingSystemPercent[] $percentages
 * @property-read int|null $percentages_count
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystem query()
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystem whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystem whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystem whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystem whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystem whereUpdatedAt($value)
 */
	class GradingSystem extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\GradingSystemPercent
 *
 * @property int $id
 * @property int $grading_system_id
 * @property string $latter
 * @property float|null $point
 * @property int $min_percentage
 * @property int $max_percentage
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystemPercent newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystemPercent newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystemPercent query()
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystemPercent whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystemPercent whereGradingSystemId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystemPercent whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystemPercent whereLatter($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystemPercent whereMaxPercentage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystemPercent whereMinPercentage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystemPercent wherePoint($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GradingSystemPercent whereUpdatedAt($value)
 */
	class GradingSystemPercent extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\SalaryScale
 *
 * @property int $id
 * @property string $title
 * @property float $amount
 * @property int $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|SalaryScale newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SalaryScale newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SalaryScale query()
 * @method static \Illuminate\Database\Eloquent\Builder|SalaryScale whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SalaryScale whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SalaryScale whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SalaryScale whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SalaryScale whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SalaryScale whereUpdatedAt($value)
 */
	class SalaryScale extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Teacher
 *
 * @property int $id
 * @property int $user_id
 * @property string $code
 * @property int $designation_id
 * @property int $salary_scale_id
 * @property string $religion
 * @property string $blood
 * @property \Illuminate\Support\Carbon $join_date
 * @property string $typeable_type
 * @property int $typeable_id
 * @property array|null $specialties
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Designation $designation
 * @property-read \App\Models\SalaryScale $salaryScale
 * @property-read \Illuminate\Database\Eloquent\Model|\Eloquent $typeable
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher query()
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereBlood($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereDesignationId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereJoinDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereReligion($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereSalaryScaleId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereSpecialties($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereTypeableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereTypeableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereUserId($value)
 */
	class Teacher extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\TeacherSubject
 *
 * @property int $id
 * @property int $class_routine_id
 * @property int $teacher_id
 * @property int $academic_subject_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|TeacherSubject newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TeacherSubject newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TeacherSubject query()
 * @method static \Illuminate\Database\Eloquent\Builder|TeacherSubject whereAcademicSubjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeacherSubject whereClassRoutineId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeacherSubject whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeacherSubject whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeacherSubject whereTeacherId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeacherSubject whereUpdatedAt($value)
 */
	class TeacherSubject extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string|null $phone
 * @property string|null $photo
 * @property int|null $parent_id
 * @property bool $status
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Permission[] $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Role[] $roles
 * @property-read int|null $roles_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User permission($permissions)
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User role($roles, $guard = null)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereParentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePhoto($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

